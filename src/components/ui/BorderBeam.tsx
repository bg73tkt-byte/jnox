import React from 'react';

interface BorderBeamProps {
  size?: number;
  duration?: number;
  borderWidth?: number;
  colorFrom?: string;
  colorTo?: string;
  className?: string;
}

export const BorderBeam: React.FC<BorderBeamProps> = ({
  duration = 6,
  borderWidth = 1.5,
  colorFrom = '#e9d5ff',
  colorTo = '#a855f7',
  className = '',
}) => {
  return (
    <div
      style={{
        padding: `${borderWidth}px`,
        mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        maskComposite: 'exclude',
        WebkitMaskComposite: 'xor',
      }}
      className={`pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden ${className}`}
    >
      <div
        className="absolute -inset-[100%] animate-border-beam"
        style={{
          animationDuration: `${duration}s`,
          background: `conic-gradient(from var(--angle, 0deg) at 50% 50%, transparent 0deg, transparent 270deg, ${colorFrom} 325deg, ${colorTo} 360deg)`,
        }}
      />
    </div>
  );
};
