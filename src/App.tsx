import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useTheme } from './hooks/useTheme';
import { useReducedMotion } from './hooks/useReducedMotion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { Offer } from './components/Offer';
import { Process } from './components/Process';
import { Reviews } from './components/Reviews';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { SplashLoader } from './components/SplashLoader';

export const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const prefersReducedMotion = useReducedMotion();

  // Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Lenis Smooth Scrolling Initialization
  useEffect(() => {
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    let animationFrameId: number;
    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, [prefersReducedMotion]);

  return (
    <div className="relative min-h-screen bg-[var(--bg)] text-[var(--text)] selection:bg-purple-500/20 selection:text-purple-300">
      {/* Short Initial Splash Reveal */}
      <SplashLoader />

      {/* Top Thin Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-[var(--accent)] origin-left z-50"
      />

      {/* Subtle Grain/Noise Overlay - strictly dark mode only */}
      {theme === 'dark' && (
        <div className="noise-overlay pointer-events-none fixed inset-0 z-30 opacity-40" />
      )}

      {/* Subtle Dark Violet Ambient Background - strictly dark mode only */}
      {theme === 'dark' && (
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_60%_at_50%_-15%,rgba(147,51,234,0.07),transparent_70%)]" />
        </div>
      )}

      {/* Navbar with Liquid Glass Pill & Circular Theme Switch */}
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      {/* Main One-Page Content */}
      <main className="relative z-10">
        <Hero />
        <Portfolio />
        <Offer />
        <Process />
        <Reviews />
        <About />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
