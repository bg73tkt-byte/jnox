import React from 'react';
import { Sparkles } from 'lucide-react';
import { BorderBeam } from './BorderBeam';

interface BadgeProps {
  children?: React.ReactNode;
  variant?: 'available' | 'payant' | 'section' | 'subtle';
  className?: string;
  withBeam?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'section',
  className = '',
  withBeam = true,
}) => {
  if (variant === 'available') {
    return (
      <div
        className={`relative inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full backdrop-blur-xl border border-emerald-500/25 bg-emerald-950/20 text-emerald-300 text-xs sm:text-sm font-medium tracking-wide shadow-[0_0_20px_-5px_rgba(34,197,94,0.3)] overflow-hidden transition-all duration-300 hover:border-emerald-400/40 ${className}`}
      >
        {withBeam && (
          <BorderBeam
            duration={7}
            size={120}
            colorFrom="#86efac"
            colorTo="#22c55e"
          />
        )}
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_#22c55e]" />
        </span>
        <span className="relative z-10 font-medium">Available for Projects</span>
      </div>
    );
  }

  if (variant === 'payant') {
    return (
      <div
        className={`relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full backdrop-blur-xl border border-purple-500/25 bg-purple-950/20 text-purple-200 text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-[0_0_25px_-5px_rgba(168,85,247,0.35)] overflow-hidden transition-all duration-300 hover:border-purple-400/50 ${className}`}
      >
        {withBeam && (
          <BorderBeam
            duration={6}
            size={140}
            colorFrom="#f3e8ff"
            colorTo="#a855f7"
          />
        )}
        <Sparkles className="w-3.5 h-3.5 text-purple-300 animate-pulse relative z-10" />
        <span className="relative z-10 font-bold tracking-wider">MONTEUR VIDÉO PAYANT</span>
      </div>
    );
  }

  // Section or subtle badge
  return (
    <div
      className={`relative inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-widest uppercase backdrop-blur-md border border-white/15 bg-white/5 text-purple-200 shadow-sm overflow-hidden ${className}`}
    >
      {withBeam && (
        <BorderBeam
          duration={8}
          size={100}
          colorFrom="#e9d5ff"
          colorTo="#a855f7"
        />
      )}
      <span className="relative z-10">{children}</span>
    </div>
  );
};
