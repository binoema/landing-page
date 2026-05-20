import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ProfileService } from '../../core/services/profile.service';
import { FaIcon } from '../../shared/fa-icon/fa-icon';
import { SkillCard } from '../../shared/skill-card/skill-card';
import { GlitchService } from '../../core/services/glitch.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink, SkillCard, FaIcon],
  templateUrl: './home.html',
})
export class Home {
  private readonly profileService = inject(ProfileService);
  protected readonly glitch = inject(GlitchService);

  protected readonly profile = this.profileService.profile;
  protected readonly skills = this.profileService.skills;
}
