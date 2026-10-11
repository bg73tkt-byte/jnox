export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnail?: string;
  videoUrl?: string;
  timecode?: string;
  resolution?: string;
  badge?: string;
}

export interface ReviewItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatar?: string;
  initial?: string;
  handle?: string;
}

export interface SocialItem {
  id: string;
  label: string;
  handle: string;
  url: string;
  icon: 'mail' | 'discord' | 'instagram' | 'link';
  copyable?: boolean;
}

export const CONTACT_URL = "https://discord.com/users/1198046862230438008"; // Profil Discord direct
export const RETURN_URL = "https://jnox.dev";

export const PROJECTS: ProjectItem[] = [
  {
    id: "showcase-1",
    title: "Showreel 2026",
    category: "Motion & Rythme",
    description: "Montage dynamique combinant keyframing chirurgical, transitions sur mesure et sound design immersif.",
    thumbnail: "/assets/pdp.png",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
    timecode: "01:42",
    resolution: "4K 60FPS",
    badge: "Master Showreel",
  },
  {
    id: "showcase-2",
    title: "Vlog & Rétention",
    category: "YouTube Long-Format",
    description: "Structure pensée pour maximiser le watchtime : accroches visuelles, zoom cuts précis et habillage sonore.",
    timecode: "12:30",
    resolution: "4K UHD",
    badge: "Rétention 70%+",
  },
  {
    id: "showcase-3",
    title: "Format Court 9:16",
    category: "TikTok & Shorts",
    description: "Édition ultra-nerveuse, sous-titres animés synchronisés mot par mot et b-rolls rythmés.",
    timecode: "00:45",
    resolution: "1080x1920",
    badge: "Vertical Reel",
  },
  {
    id: "showcase-4",
    title: "Publicité & Brand Motion",
    category: "Commercial & Teaser",
    description: "Kinetic typography, animations vectorielles et colorimétrie soignée pour valoriser un produit.",
    timecode: "00:30",
    resolution: "4K ProRes",
    badge: "Brand Identity",
  },
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Brief & Rushs",
    description: "Vous m'envoyez vos fichiers bruts (Google Drive, WeTransfer, Frame.io) accompagnés de vos directives de style et de vos références.",
  },
  {
    number: "02",
    title: "Dérush & Montage",
    description: "Sélection des meilleurs moments, construction du rythme, insertion du sound design et habillage visuel sur mesure.",
  },
  {
    number: "03",
    title: "Version V1 & Ajustements",
    description: "Livraison d'une première version complète. Nous peaufinons ensemble chaque coupe et chaque détail selon vos retours.",
  },
  {
    number: "04",
    title: "Master Final & Export",
    description: "Remise du fichier master en qualité maximale (ProRes / 4K H.264), prêt à être publié et à captiver votre audience.",
  },
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "review-1",
    quote: "Jnox a vraiment changé la qualité de mes vidéos. Son montage est super dynamique, il a tout de suite capté ma D.A. et m'a fait gagner un temps fou. Je recommande les gars !",
    name: "Créateur de contenu",
    role: "YouTube 500k+",
    initial: "C",
    handle: "@createur_yt",
  },
  {
    id: "review-2",
    quote: "Vraiment parfait, tu as réussi à faire mieux que ce que je pensais, alors que je m'attendais à une bonne vidéo.",
    name: "Créateur de contenu",
    role: "Client satisfait",
    initial: "C",
    handle: "@streamer_fr",
  },
  {
    id: "review-3",
    quote: "Le montage a complètement transformé la dynamique de ma chaîne. Sound design impeccable et retours pris en compte en moins de 24h.",
    name: "Marque & Studio",
    role: "Production Vidéo",
    initial: "M",
    handle: "@brand_media",
  },
  {
    id: "review-4",
    quote: "Une vitesse d'exécution rare et un sens du rythme qui se ressent directement sur les statistiques de rétention.",
    name: "Créateur TikTok",
    role: "Short-Form Creator",
    initial: "T",
    handle: "@shortform_pro",
  },
];

export const SOCIALS: SocialItem[] = [
  {
    id: "mail",
    label: "Email direct",
    handle: "jnoamonteur31@gmail.com",
    url: "mailto:jnoamonteur31@gmail.com",
    icon: "mail",
  },
  {
    id: "discord",
    label: "Discord",
    handle: "jnox_pro",
    url: "https://discord.com/users/1198046862230438008",
    icon: "discord",
    copyable: true,
  },
  {
    id: "instagram",
    label: "Instagram",
    handle: "@jnox_31",
    url: "https://instagram.com/jnox_31",
    icon: "instagram",
  },
  {
    id: "custom",
    label: "Portfolio & Réseau",
    handle: "@Jnoam973",
    url: "https://instagram.com/Jnoam973",
    icon: "link",
  },
];
