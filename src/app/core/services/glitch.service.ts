import { Injectable, signal } from '@angular/core';

/** Toggles NieR-style UI corruption (hack / virus infection). */
@Injectable({ providedIn: 'root' })
export class GlitchService {
  private readonly infectedState = signal(false);

  readonly infected = this.infectedState.asReadonly();

  toggleInfection(): void {
    this.infectedState.update((v) => !v);
  }

  infect(): void {
    this.infectedState.set(true);
  }

  purge(): void {
    this.infectedState.set(false);
  }
}
