import { PROFILE_DATA } from '../app/core/data/profile.data';
import { PRIVATE_PROFILE_OVERRIDES } from '../app/core/data/profile.private';
import { mergeProfile } from '../app/core/data/profile.utils';

export const environment = {
  production: false,
  profile: mergeProfile(PROFILE_DATA, PRIVATE_PROFILE_OVERRIDES),
};
