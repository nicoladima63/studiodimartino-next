import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const placeId = searchParams.get('placeId') || process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;
  const maxReviews = parseInt(searchParams.get('maxReviews') || '5');

  if (!placeId) {
    return NextResponse.json(
      { error: 'Place ID non configurato' },
      { status: 400 }
    );
  }

  if (!process.env.NEXT_PUBLIC_MAPS_API_KEY) {
    return NextResponse.json(
      { error: 'Google Maps API Key non configurato' },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews,formatted_address,website,international_phone_number,url&key=${process.env.NEXT_PUBLIC_MAPS_API_KEY}`,
      {
        headers: {
          'Accept-Language': 'it-IT,it;q=0.9',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Google API returned ${response.status}`);
    }

    const data = await response.json();

    if (data.status !== 'OK') {
      console.error('Google Places API error:', {
        status: data.status,
        errorMessage: data.error_message,
      });
      return NextResponse.json(
        {
          error: 'Google Maps non ha restituito le recensioni',
          code: data.status || 'UNKNOWN_ERROR',
        },
        { status: 502 }
      );
    }

    const result = data.result;
    const reviews = (result.reviews || []).slice(0, maxReviews);

    return NextResponse.json(
      {
        name: result.name || '',
        rating: result.rating || 0,
        user_ratings_total: result.user_ratings_total || 0,
        reviews,
        formatted_address: result.formatted_address || '',
        website: result.website,
        phone_number: result.international_phone_number,
        url: result.url || 'https://maps.app.goo.gl/',
      },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        },
      }
    );
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return NextResponse.json(
      { error: 'Errore nel caricamento delle recensioni' },
      { status: 500 }
    );
  }
}
