import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  const tools = ['Premiere Pro', 'After Effects', 'Sound Design', 'DaVinci Resolve', 'Kinetic Typography'];

  return (
    <section id="a-propos" className="relative py-28 px-4 sm:px-6 max-w-5xl mx-auto scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-[620px] mx-auto"
      >
        <div className="p-8 sm:p-12 rounded-3xl studio-card bg-[var(--surface)] border border-[var(--border)] shadow-[var(--shadow)] text-center flex flex-col items-center">
          {/* Subtle Avatar with clean fine border */}
          <div className="mb-6">
            <img
              src="/assets/pdp.png"
              alt="Jnox"
              className="w-20 h-20 rounded-full object-cover border border-[var(--border)] shadow-xs select-none"
            />
          </div>

          {/* Section Number & Label */}
          <div className="text-xs font-medium text-[var(--accent)] mb-3">
            05 — Présentation
          </div>

          {/* Title - weight 600, clamp */}
          <h2 className="text-[clamp(1.85rem,3.5vw,2.5rem)] font-semibold tracking-tight text-[var(--text)] mb-5 leading-tight">
            À propos de moi
          </h2>

          {/* Main Description */}
          <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed font-normal mb-8 max-w-lg">
            Moi c'est Jnox, j'ai 16 ans et je suis monteur vidéo passionné. Avec plusieurs années de pratique sur Premiere Pro et After Effects, je conçois des montages percutants adaptés au rythme et aux codes actuels.
          </p>

          {/* Tools Badges */}
          <div className="flex flex-wrap justify-center gap-2 pt-6 border-t border-[var(--border)] w-full">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 rounded-full text-xs font-medium text-[var(--text-muted)] bg-[var(--bg-soft)] border border-[var(--border)]"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
