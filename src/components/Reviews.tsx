import React from 'react';
import { Quote } from 'lucide-react';
import { REVIEWS, type ReviewItem } from '../config/site';

interface ReviewCardProps {
  review: ReviewItem;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="w-[320px] sm:w-[380px] p-6 rounded-2xl studio-card bg-[var(--surface)] border border-[var(--border)] shadow-[var(--shadow)] flex flex-col justify-between flex-shrink-0 select-none">
      <div>
        <div className="text-[var(--accent)] mb-3 opacity-75">
          <Quote className="w-4 h-4 fill-current" />
        </div>
        <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed italic mb-6">
          "{review.quote}"
        </p>
      </div>

      <div className="flex items-center gap-3 pt-4 border-t border-[var(--border)]">
        <div className="w-10 h-10 rounded-full border border-[var(--border)] bg-[var(--bg-soft)] flex items-center justify-center font-bold text-xs text-[var(--accent)] flex-shrink-0">
          {review.avatar ? (
            <img src={review.avatar} alt={review.name} className="w-full h-full object-cover rounded-full" />
          ) : (
            <span>{review.initial || review.name.charAt(0)}</span>
          )}
        </div>
        <div className="min-w-0">
          <h4 className="text-xs sm:text-sm font-semibold font-display text-[var(--text)] truncate">
            {review.name}
          </h4>
          <span className="text-[11px] font-mono text-[var(--text-muted)] block truncate">
            {review.role} {review.handle ? `• ${review.handle}` : ''}
          </span>
        </div>
      </div>
    </div>
  );
};

export const Reviews: React.FC = () => {
  // Multiply items for seamless marquee looping
  const row1 = [...REVIEWS, ...REVIEWS, ...REVIEWS];
  const row2 = [...REVIEWS.slice().reverse(), ...REVIEWS.slice().reverse(), ...REVIEWS.slice().reverse()];

  return (
    <section id="avis" className="relative py-28 overflow-hidden scroll-mt-20">
      {/* Editorial Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[var(--border)]">
          <div>
            <div className="text-xs font-medium text-[var(--accent)] mb-3">
              04 — Avis clients
            </div>

            <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-tight text-[var(--text)] leading-tight">
              Ils m'ont fait confiance
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-md font-normal leading-relaxed">
            Des collaborations avec des créateurs exigeants. Découvrez les retours sur la rapidité, le rythme et la qualité finale des livraisons.
          </p>
        </div>
      </div>

      {/* Edge Fade Gradients for Studio Polish (adapte à var(--bg)) */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[var(--bg)] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[var(--bg)] to-transparent z-10" />

      {/* Infinite Marquee Rows (pause on hover, 2 rows in opposite directions) */}
      <div className="flex flex-col gap-5 sm:gap-6">
        {/* Row 1: Leftward Scroll */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex gap-5 sm:gap-6">
            {row1.map((review, i) => (
              <ReviewCard key={`r1-${review.id}-${i}`} review={review} />
            ))}
          </div>
        </div>

        {/* Row 2: Rightward Scroll */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee-reverse flex gap-5 sm:gap-6">
            {row2.map((review, i) => (
              <ReviewCard key={`r2-${review.id}-${i}`} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
