import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { CONTACT_URL } from '../config/site';

export const Offer: React.FC = () => {
  const inclusions = [
    'Montage dynamique et rythmé au millimètre',
    'Sous-titres animés & kinetic typography sur mesure',
    'Sound design immersif, transitions sonores et mixage',
    'Retours et ajustements pris en compte jusqu\'à validation',
  ];

  return (
    <section id="offre" className="relative py-28 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading & Editorial Pitch */}
        <div className="lg:col-span-5 flex flex-col items-start text-left lg:sticky lg:top-28">
          <div className="text-xs font-medium text-[var(--accent)] mb-3">
            02 — Prestations
          </div>

          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-tight text-[var(--text)] leading-tight mb-6">
            Un montage taillé pour vos objectifs
          </h2>

          <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed font-normal mb-8 max-w-lg">
            Gagnez un temps précieux sur votre production. Je m'occupe de l'intégralité du montage pour vous permettre de vous concentrer sur votre création de contenu ou votre activité.
          </p>

          <div className="flex items-center gap-3 text-xs text-[var(--text-muted)] font-mono">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
            <span>Format court 9:16 ou long 16:9 • Livraisons rapides</span>
          </div>
        </div>

        {/* Right Column: 2 Studio Cards Stacked */}
        <div className="lg:col-span-7 flex flex-col gap-6 w-full">
          {/* Card 1: Pack Custom (Sur Devis) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            <div className="p-7 sm:p-9 rounded-2xl studio-card bg-[var(--surface)] border border-[var(--border)] shadow-[var(--shadow)] hover:border-[var(--accent)]">
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent)] bg-[var(--accent-subtle)] px-3 py-1 rounded-md">
                  PACK CUSTOM
                </span>
                <span className="text-xs font-mono text-[var(--text-muted)]">
                  Projets réguliers ou unitaires
                </span>
              </div>

              <h3 className="text-3xl font-display font-semibold text-[var(--text)] tracking-tight mb-3">
                Sur devis
              </h3>

              <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed mb-8">
                Adaptation totale à votre identité visuelle. Le contenu, le rythme et les animations sont définis ensemble selon vos spécifications pour un résultat prêt à performer dès la mise en ligne.
              </p>

              <Button
                href={CONTACT_URL}
                target="_blank"
                arrow="action"
                variant="primary"
                className="w-full !py-3.5 !text-sm"
              >
                Demander un devis personnalisé
              </Button>
            </div>
          </motion.div>

          {/* Card 2: Ce qui est inclus */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            <div className="p-7 sm:p-9 rounded-2xl studio-card bg-[var(--surface)] border border-[var(--border)] shadow-[var(--shadow)] hover:border-[var(--accent)]">
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-[var(--text)] tracking-tight mb-6 flex items-center justify-between">
                <span>Ce qui est inclus</span>
                <span className="text-xs font-mono font-normal text-[var(--text-muted)]">Standards Studio</span>
              </h3>

              <ul className="space-y-4">
                {inclusions.map((item, idx) => (
                  <li key={item} className="flex items-start gap-3.5">
                    <div className="w-5 h-5 rounded-full bg-[var(--accent-subtle)] border border-[var(--accent)]/40 flex items-center justify-center flex-shrink-0 text-[var(--accent)] mt-0.5">
                      <svg
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <motion.path
                          d="M20 6L9 17l-5-5"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.5,
                            delay: 0.2 + idx * 0.1,
                            ease: 'easeOut',
                          }}
                        />
                      </svg>
                    </div>
                    <span className="text-sm sm:text-base font-medium text-[var(--text)]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
