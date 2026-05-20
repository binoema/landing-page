import { Component, inject } from '@angular/core';

import { ProfileService } from '../../core/services/profile.service';
import { FaIcon } from '../../shared/fa-icon/fa-icon';

@Component({
  selector: 'app-footer',
  imports: [FaIcon],
  templateUrl: './footer.html',
})
export class Footer {
  private readonly profileService = inject(ProfileService);

  protected readonly profile = this.profileService.profile;
  protected readonly year = new Date().getFullYear();
}
