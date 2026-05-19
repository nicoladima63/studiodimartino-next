'use client';

import { useEffect, useState } from 'react';
import { getMapsReviewsService, type Review, type PlaceDetails } from '@/lib/google/maps-reviews';
import ReviewCard from './ReviewCard';

interface ReviewsSectionProps {
  placeId?: string;
  maxReviews?: number;
  sortBy?: 'recent' | 'rating_high' | 'rating_low';
}

export default function ReviewsSection({
  placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID || '',
  maxReviews = 5,
  sortBy = 'recent',
}: ReviewsSectionProps) {
  const [details, setDetails] = useState<PlaceDetails | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      if (!placeId) {
        setError('Google Place ID non configurato');
        setLoading(false);
        return;
      }

      try {
        const service = getMapsReviewsService();
        const placeDetails = await service.getPlaceDetails(placeId);

        if (!placeDetails) {
          setError('Impossibile caricare le recensioni');
          return;
        }

        setDetails(placeDetails);

        // Ordina reviews secondo il criterio
        let sorted = [...placeDetails.reviews];
        if (sortBy === 'rating_high') {
          sorted.sort((a, b) => b.rating - a.rating);
        } else if (sortBy === 'rating_low') {
          sorted.sort((a, b) => a.rating - b.rating);
        } else {
          // recent (default): ordinato per time decrescente
          sorted.sort((a, b) => b.time - a.time);
        }

        setReviews(sorted.slice(0, maxReviews));
      } catch (err) {
        console.error('Error fetching reviews:', err);
        setError('Errore nel caricamento delle recensioni');
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [placeId, maxReviews, sortBy]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <CSpinner color="primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800">
        <p>{error}</p>
      </div>
    );
  }

  if (!details || reviews.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <p>Nessuna recensione disponibile</p>
      </div>
    );
  }

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header con rating */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Recensioni dei Pazienti</h2>

          <div className="flex items-center gap-6">
            {/* Rating Stars */}
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={i < Math.round(details.rating) ? 'text-xl' : 'text-xl opacity-30'}
                  >
                    ★
                  </span>
                ))}
              </div>
              <div className="ml-2">
                <p className="text-2xl font-bold text-gray-800">{details.rating.toFixed(1)}</p>
                <p className="text-sm text-gray-600">
                  ({details.user_ratings_total} {details.user_ratings_total === 1 ? 'valutazione' : 'valutazioni'})
                </p>
              </div>
            </div>
          </div>

          {/* Link a Google Maps */}
          <a
            href={details.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium"
          >
            Visualizza tutte le recensioni su Google Maps →
          </a>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
          {reviews.map((review, index) => (
            <ReviewCard key={`${review.author_name}-${review.time}-${index}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
