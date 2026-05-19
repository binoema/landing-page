export interface SocialLink {
  label: string;
  url: string;
  /** Font Awesome classes, e.g. `fa-brands fa-github` */
  icon: string;
}

export interface SkillHighlight {
  title: string;
  description: string;
}

export interface Skill {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  /** Font Awesome classes, e.g. `fa-brands fa-angular` */
  icon: string;
  /** Tailwind classes applied to the icon, e.g. gradient text color */
  accentClass: string;
  /** Tailwind gradient stops for hover ripple, e.g. `from-red-500 to-rose-600` */
  hoverClass: string;
  highlights: SkillHighlight[];
  technologies: string[];
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  avatarInitials: string;
  socialLinks: SocialLink[];
  skills: Skill[];
}
