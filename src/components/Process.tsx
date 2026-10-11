import React, { useRef, useState, useEffect, useCallback } from 'react';
import { PROCESS_STEPS } from '../config/site';

export const Process: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeStep, setActiveStep] = useState(0);
  const [lineTop, setLineTop] = useState(0);
  const [lineHeight, setLineHeight] = useState(0);
  const [totalHeight, setTotalHeight] = useState(0);

  // Exact vertical center calculations
  const updateMetrics = useCallback(() => {
    if (!containerRef.current) return;
    const dots = dotRefs.current.filter(Boolean) as HTMLDivElement[];
    if (dots.length < 2) return;

    const firstRect = dots[0].getBoundingClientRect();
    const lastRect = dots[dots.length - 1].getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    const firstCenter = firstRect.top + firstRect.height / 2 - containerRect.top;
    const lastCenter = lastRect.top + lastRect.height / 2 - containerRect.top;

    setLineTop(firstCenter);
    const fullSpan = lastCenter - firstCenter;
    setTotalHeight(fullSpan);

    const activeDot = dots[activeStep];
    if (activeDot) {
      const activeRect = activeDot.getBoundingClientRect();
      const activeCenter = activeRect.top + activeRect.height / 2 - containerRect.top;
      setLineHeight(Math.max(0, activeCenter - firstCenter));
    }
  }, [activeStep]);

  useEffect(() => {
    updateMetrics();
    window.addEventListener('resize', updateMetrics);
    return () => window.removeEventListener('resize', updateMetrics);
  }, [updateMetrics]);

  // Scroll spy for active step
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();

      // If user has scrolled past Process, keep the last step active
      if (containerRect.bottom <= window.innerHeight * 0.45) {
        setActiveStep(PROCESS_STEPS.length - 1);
        return;
      }

      // If above the section, step 0 is active
      if (containerRect.top >= window.innerHeight * 0.55) {
        setActiveStep(0);
        return;
      }

      const viewportCenter = window.innerHeight * 0.5;
      let closest = 0;
      let minDiff = Infinity;

      dotRefs.current.forEach((dot, idx) => {
        if (!dot) return;
        const rect = dot.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const diff = Math.abs(center - viewportCenter);
        if (diff < minDiff) {
          minDiff = diff;
          closest = idx;
        }
      });

      setActiveStep(closest);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="processus"
      className="relative py-28 px-4 sm:px-6 max-w-5xl mx-auto scroll-mt-20"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 pb-8 border-b border-[var(--border)]">
        <div>
          <div className="text-xs font-medium text-[var(--accent)] mb-3">
            03 — Méthode
          </div>

          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-tight text-[var(--text)] leading-tight">
            Mon processus de travail
          </h2>
        </div>

        <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-md font-normal leading-relaxed">
          Une chaîne de production fluide et cadrée. De la réception des rushs bruts jusqu'au master final prêt pour vos réseaux.
        </p>
      </div>

      {/* Timeline Container */}
      <div ref={containerRef} className="relative max-w-3xl mx-auto">
        {/* Background Track Line */}
        {totalHeight > 0 && (
          <div
            className="absolute left-[20px] sm:left-[24px] -translate-x-1/2 w-[2px] bg-[var(--border)] rounded-full z-0"
            style={{
              top: `${lineTop}px`,
              height: `${totalHeight}px`,
            }}
          />
        )}

        {/* Active Animated Progress Line */}
        {totalHeight > 0 && (
          <div
            className="absolute left-[20px] sm:left-[24px] -translate-x-1/2 w-[2px] bg-[var(--accent)] rounded-full z-0 transition-all duration-300 ease-out"
            style={{
              top: `${lineTop}px`,
              height: `${lineHeight}px`,
            }}
          />
        )}

        {/* 4 Steps */}
        <div className="space-y-12 sm:space-y-16">
          {PROCESS_STEPS.map((step, index) => {
            const isActive = activeStep === index;

            return (
              <div
                key={step.number}
                className="relative grid grid-cols-[40px_1fr] sm:grid-cols-[48px_1fr] gap-4 sm:gap-8 items-start group"
              >
                {/* Column 1: Centered Dot */}
                <div className="h-full flex justify-center pt-7 sm:pt-8 relative z-10">
                  <div
                    ref={(el) => {
                      dotRefs.current[index] = el;
                    }}
                    className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? 'bg-[var(--accent)] scale-110 shadow-sm border-2 border-[var(--surface)]'
                        : 'bg-[var(--bg-soft)] border border-[var(--border)] opacity-60 scale-90'
                    }`}
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                        isActive ? 'bg-white' : 'bg-[var(--text-muted)]'
                      }`}
                    />
                  </div>
                </div>

                {/* Column 2: Card Content */}
                <div
                  className={`w-full p-6 sm:p-8 rounded-2xl transition-all duration-300 ${
                    isActive
                      ? 'studio-card bg-[var(--surface)] border-[var(--accent)] shadow-[var(--shadow)] opacity-100'
                      : 'bg-[var(--surface)] border border-[var(--border)] opacity-60 hover:opacity-85'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 mb-3">
                    <span
                      className={`text-2xl sm:text-4xl font-display font-semibold tracking-tight transition-all duration-300 select-none ${
                        isActive ? 'text-[var(--accent)]' : 'text-[var(--text-muted)]'
                      }`}
                    >
                      {step.number}
                    </span>

                    <h3
                      className={`text-lg sm:text-2xl font-display font-semibold tracking-tight transition-colors duration-300 ${
                        isActive ? 'text-[var(--text)]' : 'text-[var(--text-muted)]'
                      }`}
                    >
                      {step.title}
                    </h3>
                  </div>

                  <p
                    className={`text-sm sm:text-base leading-relaxed transition-colors duration-300 ${
                      isActive ? 'text-[var(--text-muted)]' : 'text-[var(--text-muted)]/80'
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
