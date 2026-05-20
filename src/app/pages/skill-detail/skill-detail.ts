import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ProfileService } from '../../core/services/profile.service';
import { FaIcon } from '../../shared/fa-icon/fa-icon';

@Component({
  selector: 'app-skill-detail',
  imports: [RouterLink, FaIcon],
  templateUrl: './skill-detail.html',
})
export class SkillDetail {
  /** Bound from route param `:slug` via `withComponentInputBinding()`. */
  readonly slug = input.required<string>();

  private readonly profileService = inject(ProfileService);

  protected readonly skill = computed(() => this.profileService.getSkillBySlug(this.slug()));

  protected readonly otherSkills = computed(() =>
    this.profileService.skills().filter((s) => s.id !== this.slug()),
  );
}
