import React from 'react';

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg
    className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-neutral-600'}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const Rating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  return (
    <div className="flex items-center gap-1">
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} filled={i < fullStars} />
        ))}
      </div>
      <span className="text-sm font-medium text-neutral-300 ml-1">{rating.toFixed(1)}</span>
    </div>
  );
};

const Card = ({ 
  name, 
  logo, 
  rating, 
  bullets, 
  ctaUrl, 
  ctaText,
  isFeatured = false 
}: { 
  name: string; 
  logo: string | React.ReactNode; 
  rating: number; 
  bullets: string[]; 
  ctaUrl: string; 
  ctaText: string;
  isFeatured?: boolean;
}) => (
  <div className={`flex flex-col bg-neutral-900/40 border ${isFeatured ? 'border-emerald-500/50 ring-1 ring-emerald-500/20' : 'border-neutral-800'} rounded-2xl p-6 transition-all hover:border-emerald-500/40 group`}>
    <div className="flex items-center justify-between mb-6">
      <div className="h-10 flex items-center">
        {typeof logo === 'string' ? (
          <img src={logo} alt={name} className="h-full w-auto object-contain" />
        ) : (
          logo
        )}
      </div>
      {isFeatured && (
        <span className="bg-emerald-600/20 border border-emerald-500 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
          Top Pick
        </span>
      )}
    </div>

    <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
    <div className="mb-4">
      <Rating rating={rating} />
    </div>

    <ul className="space-y-3 mb-8 flex-grow">
      {bullets.map((bullet, i) => (
        <li key={i} className="flex items-start gap-3 text-neutral-300 text-sm">
          <svg className="w-5 h-5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>{bullet}</span>
        </li>
      ))}
    </ul>

    <a 
      href={ctaUrl} 
      target="_blank" 
      rel="noopener sponsored"
      className="block w-full bg-emerald-600 text-white text-center font-bold py-3.5 rounded-xl hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-900/20 active:scale-[0.98]"
    >
      {ctaText}
    </a>
  </div>
);

export default function TopPicks() {
  const platforms = [
    {
      name: 'iTalki',
      logo: <span className="text-2xl font-black text-white tracking-tighter italic">italki</span>,
      rating: 4.8,
      bullets: [
        '30,000+ native teachers',
        'Pay per lesson, no subscription',
        'Lessons for every budget ($5+)'
      ],
      ctaUrl: '/go/italki',
      ctaText: 'Visit iTalki'
    },
    {
      name: 'See Guru',
      logo: <img src="/brand/see-guru-icon-512.png" alt="See Guru" className="h-10 w-auto" />,
      rating: 4.9,
      isFeatured: true,
      bullets: [
        '3 FREE TRIAL LESSONS',
        'Verified premium tutors',
        'AI-powered study dashboard'
      ],
      ctaUrl: '/go/see-guru',
      ctaText: 'Visit See Guru'
    },
    {
      name: 'Preply',
      logo: <span className="text-2xl font-black text-white tracking-tight">Preply</span>,
      rating: 4.7,
      bullets: [
        'Certified professional tutors',
        'Structured learning plans',
        '100% satisfaction guarantee'
      ],
      ctaUrl: '/go/preply',
      ctaText: 'Visit Preply'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
      {platforms.map((platform) => (
        <Card key={platform.name} {...platform} />
      ))}
    </div>
  );
}
