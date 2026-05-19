import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Skill } from '../../core/models/profile.model';
import { FaIcon } from '../fa-icon/fa-icon';

@Component({
  selector: 'app-skill-card',
  imports: [RouterLink, FaIcon],
  templateUrl: './skill-card.html',
  styleUrl: './skill-card.css',
})
export class SkillCard {
  readonly skill = input.required<Skill>();
}
