import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
import { ThemeToggle } from './ui/ThemeToggle';
import { CONTACT_URL } from '../config/site';

interface NavbarProps {
  theme: 'dark' | 'light';
  onToggleTheme: (e?: React.MouseEvent) => void;
}

const NAV_LINKS = [
  { label: 'Réalisations', href: '#realisations' },
  { label: 'Offre', href: '#offre' },
  { label: 'Process', href: '#processus' },
  { label: 'Avis', href: '#avis' },
  { label: 'À propos', href: '#a-propos' },
];

export const Navbar: React.FC<NavbarProps> = ({ theme, onToggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Detect active section
      const sections = ['realisations', 'offre', 'processus', 'avis', 'a-propos'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 pt-3 sm:pt-5 pointer-events-none">
        <motion.nav
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`pointer-events-auto flex items-center justify-between gap-3 sm:gap-6 rounded-full studio-glass transition-all duration-300 ${
            scrolled
              ? 'px-4 sm:px-5 py-2 scale-98 shadow-md'
              : 'px-5 sm:px-6 py-2.5 sm:py-3'
          }`}
        >
          {/* Logo */}
          <a
            href="#"
            className="text-base sm:text-lg font-semibold tracking-tight text-[var(--text)] group flex items-center"
          >
            <span className="font-display">Jnox</span>
            <span className="text-[var(--accent)] font-semibold ml-0.5 group-hover:scale-125 transition-transform duration-300">
              .
            </span>
          </a>

          {/* Desktop Navigation Links with Active Indicator */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = activeSection === id;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-[var(--text)] bg-[var(--accent-subtle)] font-semibold'
                      : 'text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--bg-soft)]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Right Actions: Me Contacter + Theme Toggle + Mobile Menu Trigger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Button
              href={CONTACT_URL}
              target="_blank"
              variant="primary"
              arrow="external"
              className="!px-3.5 sm:!px-5 !py-1.5 sm:!py-2 !text-xs sm:!text-sm"
            >
              Me contacter
            </Button>

            <ThemeToggle theme={theme} onToggle={onToggleTheme} />

            {/* Mobile Burger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              className="lg:hidden flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:border-[var(--accent)] cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Clean Mobile Fullscreen Menu Sheet */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-30 bg-[var(--bg)]/98 backdrop-blur-2xl flex flex-col justify-between p-6 pt-24 lg:hidden"
          >
            <div className="flex flex-col gap-3">
              <span className="text-[11px] uppercase tracking-widest text-[var(--text-muted)] font-semibold mb-2">
                Navigation
              </span>
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx, duration: 0.3 }}
                  className="text-2xl font-semibold font-display text-[var(--text)] hover:text-[var(--accent)] py-2 border-b border-[var(--border)] flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-sm text-[var(--text-muted)]">0{idx + 1}</span>
                </motion.a>
              ))}
            </div>

            <div className="pt-6 border-t border-[var(--border)] flex flex-col gap-3">
              <Button
                href={CONTACT_URL}
                target="_blank"
                variant="primary"
                arrow="external"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full !py-3 !text-sm"
              >
                Discuter d'un projet
              </Button>
              <div className="flex items-center justify-between text-xs text-[var(--text-muted)] pt-2">
                <span>© 2026 Jnox</span>
                <span>Monteur Vidéo & Motion</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
