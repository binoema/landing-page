import { Component, inject } from '@angular/core';

import { ProfileService } from '../../core/services/profile.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
})
export class Footer {
  private readonly profileService = inject(ProfileService);

  protected readonly profile = this.profileService.profile;
  protected readonly year = new Date().getFullYear();
}
