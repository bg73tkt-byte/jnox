import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

interface ButtonProps {
  children?: React.ReactNode;
  variant?: 'primary' | 'glass' | 'ghost' | 'icon';
  arrow?: 'external' | 'action' | 'none';
  href?: string;
  target?: string;
  rel?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  className?: string;
  ariaLabel?: string;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'glass',
  arrow = 'none',
  href,
  target,
  rel,
  onClick,
  className = '',
  ariaLabel,
  disabled = false,
}) => {
  const btnRef = useRef<HTMLElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Subtle magnetic pull physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 18, stiffness: 220, mass: 0.1 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!btnRef.current || disabled) return;
    const rect = btnRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * 0.14;
    const deltaY = (e.clientY - centerY) * 0.14;
    x.set(deltaX);
    y.set(deltaY);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const isPrimary = variant === 'primary';
  const isGhost = variant === 'ghost';
  const isIcon = variant === 'icon';

  const baseClasses = `
    group relative inline-flex items-center justify-center font-medium text-xs sm:text-sm tracking-wide
    overflow-hidden backdrop-blur-xl transition-all duration-300 select-none
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2
    ${isIcon 
      ? 'rounded-full w-10 h-10 p-0 border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:border-[var(--accent)]' 
      : isPrimary
      ? 'rounded-full px-5 py-2.5 sm:px-6 sm:py-3 bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] hover:bg-[var(--btn-primary-hover)] shadow-sm'
      : isGhost
      ? 'rounded-full px-4 py-2 text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--bg-soft)]'
      : 'rounded-full px-5 py-2.5 sm:px-6 sm:py-3 border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--text)] shadow-xs'
    }
    ${disabled ? 'opacity-40 pointer-events-none' : 'cursor-pointer'}
    ${className}
  `;

  const content = (
    <>
      {/* Light shimmer ripple on hover */}
      <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      {/* Subtle accent hover backdrop tint */}
      {!isPrimary && (
        <div
          className={`pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 bg-[var(--accent-subtle)] ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}

      <span className="relative z-10 flex items-center gap-2">
        {children}
        {arrow === 'external' && (
          <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
        )}
        {arrow === 'action' && (
          <ArrowRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
        )}
      </span>
    </>
  );

  if (href) {
    return (
      <motion.a
        ref={btnRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        style={{ x: smoothX, y: smoothY }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        aria-label={ariaLabel}
        className={baseClasses}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={btnRef as React.RefObject<HTMLButtonElement>}
      type="button"
      style={{ x: smoothX, y: smoothY }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
      className={baseClasses}
    >
      {content}
    </motion.button>
  );
};
