import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Film, Clock, Eye } from 'lucide-react';
import { VideoModal } from './VideoModal';
import { PROJECTS, type ProjectItem } from '../config/site';

export const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="realisations" className="relative py-28 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-20">
      {/* Editorial Section Header: Left aligned, generous spacing */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[var(--border)]">
        <div>
          <div className="text-xs font-medium text-[var(--accent)] mb-3">
            01 — Réalisations
          </div>

          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-tight text-[var(--text)] leading-tight">
            Mes réalisations
          </h2>
        </div>

        <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-md font-normal leading-relaxed">
          Chaque projet est pensé pour capter immédiatement l'attention : transitions invisibles, sound design chirurgical et rétention maximale.
        </p>
      </div>

      {/* Asymmetrical Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-7">
        {PROJECTS.map((project, index) => {
          // Asymmetric spans: 7 / 5 / 5 / 7
          const isLarge = index === 0 || index === 3;
          const colSpan = isLarge ? 'lg:col-span-7' : 'lg:col-span-5';

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`${colSpan} flex flex-col`}
            >
              {/* Carte vidéo avec cadre blanc et ombre douce en clair, sombre en dark */}
              <div
                onClick={() => setSelectedProject(project)}
                className="group relative flex flex-col justify-between h-full rounded-2xl p-4 sm:p-5 studio-card bg-[var(--surface)] border border-[var(--border)] shadow-[var(--shadow)] hover:border-[var(--accent)] cursor-pointer overflow-hidden"
              >
                {/* Visual Video Frame (fond sombre préservé pour le contraste du média) */}
                <div className={`relative w-full overflow-hidden rounded-xl bg-[#0e0b16] ${index === 2 ? 'aspect-[16/10] sm:aspect-[16/9]' : 'aspect-video'}`}>
                  {index === 0 ? (
                    /* Showcase Reel with real profile asset & video UI */
                    <div className="w-full h-full bg-gradient-to-br from-purple-950/80 via-zinc-950 to-black flex items-center justify-center relative group-hover:scale-[1.02] transition-transform duration-500">
                      <div className="relative flex flex-col items-center">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-white/40 shadow-2xl relative">
                          <img
                            src="/assets/pdp.png"
                            alt="Jnox"
                            className="w-full h-full object-cover select-none"
                          />
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Play className="w-8 h-8 text-white fill-white translate-x-0.5" />
                          </div>
                        </div>
                        <div className="mt-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-semibold text-white flex items-center gap-1.5">
                          <Eye className="w-3 h-3 text-purple-300" />
                          <span>Cliquer pour lancer le player</span>
                        </div>
                      </div>
                    </div>
                  ) : index === 1 ? (
                    /* YouTube Long-Form Mockup: timeline scrub preview */
                    <div className="w-full h-full bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-5 flex flex-col justify-between relative">
                      <div className="flex items-center justify-between text-xs text-zinc-400">
                        <span className="flex items-center gap-1 font-mono text-[11px]">
                          <Film className="w-3.5 h-3.5 text-purple-400" />
                          TIMELINE 4K
                        </span>
                        <span className="font-mono text-purple-300 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-800/40">
                          Rétention 72%
                        </span>
                      </div>
                      
                      {/* Audio & Video Track Mockup */}
                      <div className="space-y-1.5 my-auto">
                        <div className="h-2 rounded-full bg-zinc-800 overflow-hidden">
                          <div className="h-full bg-purple-500 w-[68%]" />
                        </div>
                        <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                          <span>00:00</span>
                          <span>12:30</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-zinc-400 font-mono pt-2 border-t border-zinc-800">
                        <span>AUDIO: MASTER STEREO</span>
                        <span>EXPORT: 4K UHD</span>
                      </div>
                    </div>
                  ) : index === 2 ? (
                    /* Short-Form 9:16 Mockup: phone frame preview */
                    <div className="w-full h-full bg-gradient-to-br from-zinc-950 via-purple-950/40 to-black flex items-center justify-center p-4 relative">
                      <div className="w-24 h-40 sm:w-28 sm:h-44 rounded-2xl border-2 border-zinc-700 bg-zinc-900 shadow-2xl flex flex-col justify-between p-2 relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                        <div className="w-8 h-1 rounded-full bg-zinc-700 mx-auto" />
                        <div className="space-y-1 my-auto text-center">
                          <div className="text-[9px] font-bold text-white uppercase tracking-wider">Hook 0.5s</div>
                          <div className="h-1 w-12 mx-auto rounded-full bg-purple-500" />
                          <div className="text-[8px] text-zinc-400">Dynamic Captions</div>
                        </div>
                        <div className="flex justify-between text-[8px] text-zinc-500 font-mono">
                          <span>9:16</span>
                          <span>60FPS</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Commercial & Motion Design Frame */
                    <div className="w-full h-full bg-gradient-to-br from-zinc-900 via-indigo-950/40 to-black p-5 flex flex-col justify-between relative">
                      <div className="flex items-center justify-between text-xs text-zinc-400">
                        <span className="font-mono text-[11px]">COLOR GRADE: REC.709</span>
                        <span className="text-[11px] font-mono text-purple-300 bg-purple-950/50 px-2 py-0.5 rounded border border-purple-800/40">ProRes</span>
                      </div>
                      
                      <div className="flex flex-col items-center justify-center my-auto">
                        <div className="text-xl sm:text-2xl font-bold tracking-tight text-white/90">KINETIC</div>
                        <div className="text-xs text-purple-400 tracking-widest uppercase font-mono">Motion Sequence</div>
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-zinc-500 font-mono pt-2 border-t border-zinc-800">
                        <span>KEYFRAMES: BEZIER</span>
                        <span>00:30 MASTER</span>
                      </div>
                    </div>
                  )}

                  {/* Top Badges overlay on video frame */}
                  <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide bg-black/75 backdrop-blur-md text-white border border-white/10">
                      {project.category}
                    </span>
                    {project.badge && (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium bg-purple-600/80 text-white backdrop-blur-md hidden sm:inline-block">
                        {project.badge}
                      </span>
                    )}
                  </div>

                  {/* Bottom Timecode Badge */}
                  {project.timecode && (
                    <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono bg-black/75 backdrop-blur-md text-zinc-300 border border-white/10 z-10">
                      <Clock className="w-3 h-3 text-purple-400" />
                      <span>{project.timecode}</span>
                    </div>
                  )}
                </div>

                {/* Card Editorial Meta Below Video Frame */}
                <div className="pt-4 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <h3 className="text-lg sm:text-xl font-bold font-display text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                        {project.title}
                      </h3>
                      {project.resolution && (
                        <span className="text-[11px] font-mono text-[var(--text-muted)] border border-[var(--border)] px-2 py-0.5 rounded">
                          {project.resolution}
                        </span>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-[var(--border)] flex items-center justify-between text-xs font-medium text-[var(--accent)]">
                    <span className="group-hover:underline">Ouvrir le projet</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Video Modal Player */}
      <VideoModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Portfolio;
