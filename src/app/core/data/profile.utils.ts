import { Profile } from '../models/profile.model';

export function mergeProfile(base: Profile, overrides: Partial<Profile>): Profile {
  return {
    ...base,
    ...overrides,
    skills: overrides.skills ?? base.skills,
    socialLinks: overrides.socialLinks ?? base.socialLinks,
  };
}
