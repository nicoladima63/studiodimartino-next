import './types';

export interface Review {
  author_name: string;
  author_url?: string;
  language: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

export interface PlaceDetails {
  name: string;
  rating: number;
  user_ratings_total: number;
  reviews: Review[];
  formatted_address: string;
  url: string;
  website?: string;
  phone_number?: string;
}

class MapsReviewsService {
  private isScriptLoaded = false;

  async waitForMapsScript(): Promise<boolean> {
    if (typeof window === 'undefined') return false;
    if (this.isScriptLoaded) return true;

    const maxAttempts = 50;
    let attempts = 0;

    while (attempts < maxAttempts) {
      if (window.google?.maps?.places?.Place) {
        this.isScriptLoaded = true;
        return true;
      }
      await new Promise(resolve => setTimeout(resolve, 100));
      attempts++;
    }

    console.error('Google Maps script not loaded after timeout');
    return false;
  }

  /**
   * Legge i dettagli e le recensioni di un luogo Google Maps
   * Nota: Richiede che l'API Key abbia abilitati:
   * - Places API
   * - Maps JavaScript API
   */
  async getPlaceDetails(placeId: string): Promise<PlaceDetails | null> {
    try {
      if (!(await this.waitForMapsScript())) {
        console.error('Google Maps not available');
        return null;
      }

      const { Place } = window.google.maps.places;

      const place = new (Place as any)({
        id: placeId,
      });

      await (place as any).fetchFields({
        fields: [
          'displayName',
          'rating',
          'userRatingCount',
          'reviews',
          'formattedAddress',
          'websiteURI',
          'internationalPhoneNumber',
          'url',
        ],
      });

      const details: PlaceDetails = {
        name: (place as any).displayName || '',
        rating: (place as any).rating || 0,
        user_ratings_total: (place as any).userRatingCount || 0,
        reviews: (place as any).reviews || [],
        formatted_address: (place as any).formattedAddress || '',
        url: (place as any).url || '',
        website: (place as any).websiteURI,
        phone_number: (place as any).internationalPhoneNumber,
      };

      return details;
    } catch (error) {
      console.error('Error fetching place details:', error);
      return null;
    }
  }

  /**
   * Legge solo le recensioni (versione semplificata per client-side)
   */
  async getReviews(placeId: string): Promise<Review[]> {
    const details = await this.getPlaceDetails(placeId);
    return details?.reviews || [];
  }
}

// Singleton instance
let instance: MapsReviewsService | null = null;

export function getMapsReviewsService(): MapsReviewsService {
  if (!instance) {
    instance = new MapsReviewsService();
  }
  return instance;
}

export default MapsReviewsService;
