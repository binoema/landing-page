import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { GlitchService } from '../../core/services/glitch.service';
import { ProfileService } from '../../core/services/profile.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
})
export class Header {
  private readonly profileService = inject(ProfileService);
  protected readonly glitch = inject(GlitchService);

  protected readonly profile = this.profileService.profile;
  protected readonly navSkills = this.profileService.skills;
  protected readonly menuOpen = signal(false);

  protected readonly navLinks = computed(() => [
    { label: 'Home', path: '/' },
    ...this.navSkills().map((skill) => ({
      label: skill.name,
      path: `/skills/${skill.id}`,
    })),
  ]);

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  toggleVirus(): void {
    this.glitch.toggleInfection();
  }
}
