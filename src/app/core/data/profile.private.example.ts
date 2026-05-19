import { Profile } from '../models/profile.model';

/**
 * Copy this file to `profile.private.ts` (gitignored) and fill in your real details.
 * Used only when running `ng serve` / development builds.
 */
export const PRIVATE_PROFILE_OVERRIDES: Partial<Profile> = {
  name: 'Your Name',
  title: 'Full-Stack Software Developer',
  tagline: 'Angular specialist building fast, accessible web experiences.',
  bio: 'Your personal bio goes here.',
  location: 'Your City, Country',
  email: 'hello@example.com',
  avatarInitials: 'YN',
  socialLinks: [
    { label: 'GitHub', url: 'https://github.com/your-username', icon: 'fa-brands fa-github' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/your-profile', icon: 'fa-brands fa-linkedin' },
    { label: 'Email', url: 'mailto:hello@example.com', icon: 'fa-solid fa-envelope' },
  ],
};
