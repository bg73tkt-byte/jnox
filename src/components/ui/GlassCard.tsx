import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { BorderBeam } from './BorderBeam';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  tilt?: boolean;
  borderBeam?: boolean;
  beamColorFrom?: string;
  beamColorTo?: string;
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  tilt = false,
  borderBeam = false,
  beamColorFrom = '#e9d5ff',
  beamColorTo = '#a855f7',
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, opacity: 0 });

  // 3D Tilt Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7deg', '-7deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7deg', '7deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    setMousePos({
      x: mouseX,
      y: mouseY,
      opacity: 1,
    });

    if (tilt) {
      const width = rect.width;
      const height = rect.height;
      const xPct = (mouseX / width) - 0.5;
      const yPct = (mouseY / height) - 0.5;
      x.set(xPct);
      y.set(yPct);
    }
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, opacity: 0 }));
    if (tilt) {
      x.set(0);
      y.set(0);
    }
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={tilt ? { rotateX, rotateY, transformStyle: 'preserve-3d' } : undefined}
      className={`group relative overflow-hidden liquid-card liquid-glass transition-shadow duration-300 ${className}`}
    >
      {/* Dynamic Specular Highlight that follows cursor */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: mousePos.opacity,
          background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.12), transparent 80%)`,
        }}
      />

      {/* Subtle Purple Specular Tone */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: mousePos.opacity * 0.7,
          background: `radial-gradient(280px circle at ${mousePos.x}px ${mousePos.y}px, rgba(168, 85, 247, 0.15), transparent 70%)`,
        }}
      />

      {/* Rotating border beam */}
      {borderBeam && (
        <BorderBeam
          duration={7}
          borderWidth={1.5}
          colorFrom={beamColorFrom}
          colorTo={beamColorTo}
        />
      )}

      {/* Card Content with 3D depth */}
      <div className="relative z-10 w-full h-full flex flex-col" style={tilt ? { transform: 'translateZ(20px)' } : undefined}>
        {children}
      </div>
    </motion.div>
  );
};
