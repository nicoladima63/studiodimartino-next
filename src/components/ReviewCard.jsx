import Image from 'next/image';

export default function ReviewCard({ review, url }) {
  const date = new Date(review.time * 1000).toLocaleDateString('it-IT', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 h-80 flex flex-col overflow-hidden">
      {/* Header with date and author */}
      <div className="flex items-start gap-4 mb-3">
        {review.profile_photo_url && (
          <div className="flex-shrink-0">
            <Image
              src={review.profile_photo_url}
              alt={review.author_name}
              width={48}
              height={48}
              className="rounded-full"
              onError={(e) => {
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
              className="text-blue-600 hover:text-blue-800 font-semibold block text-sm"
            >
              {review.author_name}
            </a>
          ) : (
            <h3 className="font-semibold text-gray-800 text-sm">{review.author_name}</h3>
          )}

          <div className="flex text-yellow-400 mt-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < review.rating ? 'text-xs' : 'text-xs opacity-30'}>
                ★
              </span>
            ))}
          </div>
        </div>

        <span className="text-xs text-gray-500 flex-shrink-0 whitespace-nowrap">
          {review.relative_time_description}
        </span>
      </div>

      {/* Review text - scrollable */}
      <p className="text-gray-700 leading-relaxed text-sm flex-1 overflow-y-auto mb-3">
        {review.text}
      </p>

      {/* Footer with date and link */}
      <div className="flex items-center justify-between gap-2 pt-3 border-t border-gray-100 flex-shrink-0">
        <span className="text-xs text-gray-500">{date}</span>
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-blue-600 hover:text-blue-800 font-semibold"
          >
            Visualizza su Google →
          </a>
        )}
      </div>
    </div>
  );
}
