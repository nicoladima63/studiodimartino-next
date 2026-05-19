import { Review } from '@/lib/google/maps-reviews';
import Image from 'next/image';

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const date = new Date(review.time * 1000).toLocaleDateString('it-IT');

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
      {/* Header con avatar e nome */}
      <div className="flex items-start gap-4 mb-4">
        {review.profile_photo_url && (
          <div className="flex-shrink-0">
            <Image
              src={review.profile_photo_url}
              alt={review.author_name}
              width={48}
              height={48}
              className="rounded-full"
              onError={(e) => {
                // Fallback se l'immagine non carica
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        )}

        <div className="flex-1 min-w-0">
          {review.author_url ? (
            <a
              href={review.author_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-semibold block"
            >
              {review.author_name}
            </a>
          ) : (
            <h3 className="font-semibold text-gray-800">{review.author_name}</h3>
          )}

          {/* Rating Stars */}
          <div className="flex items-center gap-2 mt-1">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < review.rating ? 'text-sm' : 'text-sm opacity-30'}>
                  ★
                </span>
              ))}
            </div>
            <span className="text-sm text-gray-600">{date}</span>
          </div>
        </div>
      </div>

      {/* Testo della recensione */}
      <p className="text-gray-700 leading-relaxed mb-3">{review.text}</p>

      {/* Footer con tempo relativo */}
      <p className="text-sm text-gray-500">{review.relative_time_description}</p>

      {/* Lingua (se non è italiano) */}
      {review.language && review.language !== 'it' && (
        <div className="mt-3 pt-3 border-t border-gray-100">
          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
            Lingua: {review.language}
          </span>
        </div>
      )}
    </div>
  );
}
