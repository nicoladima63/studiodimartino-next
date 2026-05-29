'use client';

import { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

export default function ReviewsSection({
  maxReviews = 5,
  sortBy = 'recent',
}) {
  const [details, setDetails] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`/api/reviews?maxReviews=${maxReviews}`);

        if (!response.ok) {
          throw new Error('Errore nel caricamento delle recensioni');
        }

        const data = await response.json();

        if (data.error) {
          setError(data.error);
          return;
        }

        setDetails(data);

        let sorted = [...data.reviews];
        if (sortBy === 'rating_high') {
          sorted.sort((a, b) => b.rating - a.rating);
        } else if (sortBy === 'rating_low') {
          sorted.sort((a, b) => a.rating - b.rating);
        } else {
          sorted.sort((a, b) => b.time - a.time);
        }

        setReviews(sorted);
      } catch (err) {
        console.error('Error fetching reviews:', err);
        setError('Errore nel caricamento delle recensioni');
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [maxReviews, sortBy]);

  useEffect(() => {
    if (reviews.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (reviews.length + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [reviews.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
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

  const carouselItems = [...reviews, { isCallToAction: true, url: details.url }];

  return (
    <section className="w-full px-4">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Recensioni dei Pazienti</h2>
          <div className="flex items-center gap-3 mt-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={i < Math.round(details.rating) ? 'text-lg' : 'text-lg opacity-30'}
                >
                  ★
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-600">
              {details.rating.toFixed(1)} ({details.user_ratings_total} {details.user_ratings_total === 1 ? 'valutazione' : 'valutazioni'})
            </p>
          </div>
        </div>

        <a
          href={details.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm lg:text-base whitespace-nowrap"
        >
          Visualizza tutte le recensioni
          <span>→</span>
        </a>
      </div>

      <div className="relative">
        {/* Carousel Container */}
        <div className="overflow-hidden">
          <div
            className="transition-transform duration-500 ease-in-out flex gap-6"
            style={{
              transform: `translateX(-${currentIndex * (320 + 24)}px)`,
              width: 'fit-content',
            }}
          >
            {/* Review Cards */}
            {reviews.map((review, index) => (
              <div
                key={`${review.author_name}-${review.time}-${index}`}
                className="w-80 flex-shrink-0"
              >
                <ReviewCard review={review} url={details.url} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-6">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-6 rounded-full transition-all ${index === currentIndex
                ? 'bg-blue-600 w-8'
                : 'bg-gray-300 w-6 hover:bg-gray-400'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
