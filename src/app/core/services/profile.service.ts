import { Injectable, computed, signal } from '@angular/core';

import { Profile, Skill } from '../models/profile.model';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  private readonly profileState = signal<Profile>(environment.profile);

  readonly profile = this.profileState.asReadonly();
  readonly skills = computed(() => this.profile().skills);
  readonly skillSlugs = computed(() => this.skills().map((s) => s.slug));

  getSkillBySlug(slug: string): Skill | undefined {
    return this.skills().find((s) => s.slug === slug);
  }

  updateProfile(partial: Partial<Profile>): void {
    this.profileState.update((current) => ({ ...current, ...partial }));
  }
}
