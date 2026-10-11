export interface DockAppItem {
  id: string;
  name: string;
  icon: string;
}

const svgToDataUri = (svg: string) => `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

const finderSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="finderBg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#0284c7"/>
    </linearGradient>
    <linearGradient id="faceL" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#bae6fd"/>
      <stop offset="100%" stop-color="#e0f2fe"/>
    </linearGradient>
    <linearGradient id="faceR" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#0284c7"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="22" fill="url(#finderBg)"/>
  <path d="M50 14 C28 14 16 26 16 50 C16 74 28 86 50 86 Z" fill="url(#faceL)"/>
  <path d="M50 14 C72 14 84 26 84 50 C84 74 72 86 50 86 Z" fill="url(#faceR)"/>
  <circle cx="34" cy="42" r="5" fill="#0f172a"/>
  <circle cx="66" cy="42" r="5" fill="#0f172a"/>
  <path d="M50 14 v44 c-7 0 -11 6 -11 6" fill="none" stroke="#0f172a" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M26 62 Q50 82 74 62" fill="none" stroke="#0f172a" stroke-width="4.5" stroke-linecap="round"/>
</svg>`;

const premiereSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="prBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#18042b"/>
      <stop offset="100%" stop-color="#0c0217"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="22" fill="url(#prBg)" stroke="#9333ea" stroke-width="3"/>
  <text x="50" y="66" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="44" font-weight="800" fill="#c084fc" text-anchor="middle">Pr</text>
</svg>`;

const afterEffectsSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="aeBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a0529"/>
      <stop offset="100%" stop-color="#040114"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="22" fill="url(#aeBg)" stroke="#818cf8" stroke-width="3"/>
  <text x="50" y="66" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="44" font-weight="800" fill="#a5b4fc" text-anchor="middle">Ae</text>
</svg>`;

const photoshopSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="psBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#031b2e"/>
      <stop offset="100%" stop-color="#010e19"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="22" fill="url(#psBg)" stroke="#38bdf8" stroke-width="3"/>
  <text x="50" y="66" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="44" font-weight="800" fill="#38bdf8" text-anchor="middle">Ps</text>
</svg>`;

const safariSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="safBg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#f8fafc"/>
      <stop offset="100%" stop-color="#e2e8f0"/>
    </linearGradient>
    <linearGradient id="safDial" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#0284c7"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="22" fill="url(#safBg)" stroke="#cbd5e1" stroke-width="1.5"/>
  <circle cx="50" cy="50" r="34" fill="url(#safDial)"/>
  <polygon points="50,22 55,50 45,50" fill="#ef4444"/>
  <polygon points="50,78 55,50 45,50" fill="#ffffff"/>
  <circle cx="50" cy="50" r="3.5" fill="#ffffff"/>
</svg>`;

const terminalSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="22" fill="#1e293b" stroke="#334155" stroke-width="2"/>
  <circle cx="20" cy="20" r="3" fill="#ef4444"/>
  <circle cx="28" cy="20" r="3" fill="#f59e0b"/>
  <circle cx="36" cy="20" r="3" fill="#10b981"/>
  <path d="M22 45 L36 55 L22 65" fill="none" stroke="#c084fc" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="42" y="62" width="18" height="4" rx="2" fill="#e2e8f0"/>
</svg>`;

export const DOCK_APPS: DockAppItem[] = [
  {
    id: 'finder',
    name: 'Finder',
    icon: svgToDataUri(finderSvg),
  },
  {
    id: 'premiere',
    name: 'Premiere Pro',
    icon: svgToDataUri(premiereSvg),
  },
  {
    id: 'after-effects',
    name: 'After Effects',
    icon: svgToDataUri(afterEffectsSvg),
  },
  {
    id: 'photoshop',
    name: 'Photoshop',
    icon: svgToDataUri(photoshopSvg),
  },
  {
    id: 'safari',
    name: 'Safari',
    icon: svgToDataUri(safariSvg),
  },
  {
    id: 'terminal',
    name: 'Terminal',
    icon: svgToDataUri(terminalSvg),
  },
];
