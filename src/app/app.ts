import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { GlitchService } from './core/services/glitch.service';
import { Footer } from './layout/footer/footer';
import { Header } from './layout/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
  host: {
    class: 'block min-h-dvh',
    '[class.nier-infected]': 'glitch.infected()',
  },
})
export class App {
  protected readonly glitch = inject(GlitchService);
}
