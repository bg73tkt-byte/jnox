import React, { useEffect, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: -200, y: -200 });
  const currentPos = useRef({ x: -200, y: -200 });
  const isHovered = useRef(false);
  const hasMoved = useRef(false);

  useEffect(() => {
    // Only enable on fine pointer devices (desktop mouse)
    if (typeof window === 'undefined' || !window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!hasMoved.current) {
        hasMoved.current = true;
        currentPos.current = { x: e.clientX, y: e.clientY };
      }
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '1';
      }
    };

    const onMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '0';
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button' ||
        target.dataset.interactive === 'true'
      ) {
        isHovered.current = true;
        if (cursorRef.current) {
          cursorRef.current.style.width = '44px';
          cursorRef.current.style.height = '44px';
          cursorRef.current.style.backgroundColor = 'rgba(168, 85, 247, 0.12)';
          cursorRef.current.style.boxShadow = '0 0 16px rgba(168, 85, 247, 0.35)';
        }
      } else {
        isHovered.current = false;
        if (cursorRef.current) {
          cursorRef.current.style.width = '28px';
          cursorRef.current.style.height = '28px';
          cursorRef.current.style.backgroundColor = 'transparent';
          cursorRef.current.style.boxShadow = 'none';
        }
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseover', onMouseOver, { passive: true });
    document.documentElement.addEventListener('mouseleave', onMouseLeave);

    let animationFrameId: number;
    const loop = () => {
      if (hasMoved.current && cursorRef.current) {
        currentPos.current.x += (mousePos.current.x - currentPos.current.x) * 0.22;
        currentPos.current.y += (mousePos.current.y - currentPos.current.y) * 0.22;
        cursorRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0) translate(-50%, -50%)`;
      }
      animationFrameId = requestAnimationFrame(loop);
    };
    animationFrameId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-50 hidden md:block will-change-transform"
      style={{
        opacity: 0,
        width: '28px',
        height: '28px',
        borderRadius: '9999px',
        border: '1.5px solid rgba(168, 85, 247, 0.65)',
        transition: 'opacity 0.2s ease, width 0.2s ease, height 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease',
      }}
    />
  );
};
