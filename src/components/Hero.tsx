import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { CONTACT_URL } from '../config/site';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[88vh] sm:min-h-[90vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-28 pb-16 overflow-hidden">
      {/* Photo de profil (PDP) en haut avec flottement et stretch */}
      <div className="relative mb-7 flex items-center justify-center select-none">
        <motion.div
          animate={{
            y: [-8, 8, -8],
            scaleY: [1.0, 1.03, 1.0],
            scaleX: [1.0, 0.98, 1.0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative inline-block cursor-pointer"
        >
          {/* Halo sombre respirant UNIQUEMENT en mode sombre (supprimé en mode clair) */}
          <motion.div
            animate={{
              opacity: [0.55, 0.85, 0.55],
              scale: [0.95, 1.05, 0.95],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute inset-1 rounded-full bg-purple-500/30 blur-2xl -z-10 hero-pdp-glow"
          />

          {/* En clair : bordure fine violette sans lueur. En sombre : glow drop-shadow */}
          <img
            src="/assets/pdp.png"
            alt="Jnox — Monteur Vidéo & Motion Designer"
            className="w-[165px] h-[165px] sm:w-[180px] sm:h-[180px] rounded-full object-cover block select-none border-2 border-[var(--accent)]/30 [html[data-theme='dark']_&]:border-transparent [html[data-theme='dark']_&]:drop-shadow-[0_0_30px_rgba(168,85,247,0.55)]"
            loading="eager"
          />
        </motion.div>
      </div>

      {/* 1. Petit badge discret : Disponible pour nouveaux projets */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[var(--badge-border)] bg-[var(--badge-bg)] text-[var(--badge-text)] text-xs font-medium mb-6 sm:mb-8 select-none shadow-xs"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
        <span>Disponible pour nouveaux projets</span>
      </motion.div>

      {/* 2. Titre : 2 lignes max desktop, clamp(2.5rem, 6vw, 5rem), interlignage 1.05, letter-spacing -0.03em */}
      <h1
        className="text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.05] tracking-[-0.03em] [text-wrap:balance] text-[var(--text)] mb-6 sm:mb-8 max-w-[16ch]"
      >
        <div className="overflow-hidden">
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            Monteur vidéo
          </motion.div>
        </div>
        <div className="overflow-hidden">
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            &{' '}
            <span className="text-[var(--accent)] font-semibold">
              motion designer
            </span>
          </motion.div>
        </div>
      </h1>

      {/* 3. Sous-titre : 1 phrase courte, 18px, max 50 caractères / ligne */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="text-[17px] sm:text-[18px] text-[var(--text-muted)] max-w-[50ch] mx-auto leading-relaxed [text-wrap:balance] mb-7 sm:mb-8 font-normal"
      >
        Du rythme, des coupes nettes et un sound design qui marque.
      </motion.p>

      {/* 4. Actions : UN bouton principal + un lien texte simple */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center justify-center gap-6 sm:gap-8 flex-wrap"
      >
        <Button href="#realisations" variant="primary">
          Voir les réalisations
        </Button>
        <a
          href={CONTACT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm sm:text-base font-medium text-[var(--text-muted)] hover:text-[var(--text)] transition-colors inline-flex items-center gap-1.5 group cursor-pointer"
        >
          <span>Discuter d'un projet</span>
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 text-[var(--text-muted)] group-hover:text-[var(--text)]">
            →
          </span>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
