import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';

import { ProfileService } from '../../core/services/profile.service';
import { FaIcon } from '../../shared/fa-icon/fa-icon';

@Component({
  selector: 'app-skill-detail',
  imports: [RouterLink, FaIcon],
  templateUrl: './skill-detail.html',
})
export class SkillDetail {
  private readonly route = inject(ActivatedRoute);
  private readonly profileService = inject(ProfileService);

  private readonly slug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('slug') ?? '')),
    { initialValue: '' },
  );

  protected readonly skill = computed(() => {
    const slug = this.slug();
    return slug ? this.profileService.getSkillBySlug(slug) : undefined;
  });

  protected readonly otherSkills = computed(() =>
    this.profileService.skills().filter((s) => s.id !== this.slug()),
  );
}
