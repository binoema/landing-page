import { PROFILE_DATA } from '../../src/app/core/data/profile.data';

/** Public profile data — matches production e2e builds (no private overrides). */
export const profile = PROFILE_DATA;

export const skillSlugs = profile.skills.map((s) => s.slug);
