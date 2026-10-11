import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play } from 'lucide-react';
import type { ProjectItem } from '../config/site';

interface VideoModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 15 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-4xl rounded-2xl overflow-hidden bg-[var(--surface)] border border-[var(--border)] shadow-2xl z-10 flex flex-col max-h-[90vh]"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border)] bg-[var(--bg-soft)]">
            <div>
              <span className="text-[11px] uppercase font-semibold text-[var(--accent)] tracking-wider">
                {project.category}
              </span>
              <h3 className="text-base sm:text-lg font-semibold font-display text-[var(--text)]">
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              aria-label="Fermer la vidéo"
              className="p-2 rounded-full border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--bg-soft)] text-[var(--text)] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Video Player Frame */}
          <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
            {project.videoUrl ? (
              <iframe
                src={project.videoUrl}
                title={project.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="text-center p-8">
                <div className="w-14 h-14 rounded-full bg-[var(--accent-subtle)] text-[var(--accent)] flex items-center justify-center mx-auto mb-4 border border-[var(--accent)]/30">
                  <Play className="w-6 h-6 fill-current translate-x-0.5" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Aperçu en cours d'export</h4>
                <p className="text-sm text-zinc-400 max-w-md mx-auto">
                  La vidéo est en cours de rendu final. Contactez-moi directement pour recevoir le lien privé Frame.io.
                </p>
              </div>
            )}
          </div>

          {/* Description & Meta Footer */}
          <div className="p-6 bg-[var(--surface)] border-t border-[var(--border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-xl">
              {project.description}
            </p>
            <div className="flex items-center gap-2 flex-shrink-0">
              {project.resolution && (
                <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-[var(--bg-soft)] text-[var(--text)] border border-[var(--border)]">
                  {project.resolution}
                </span>
              )}
              {project.timecode && (
                <span className="px-2.5 py-1 rounded-md text-xs font-mono font-medium text-[var(--text-muted)] bg-[var(--bg-soft)] border border-[var(--border)]">
                  {project.timecode}
                </span>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default VideoModal;
