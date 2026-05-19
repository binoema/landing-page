import { Component, computed, input } from '@angular/core';

/** Renders a Font Awesome icon via class names (e.g. `fa-brands fa-angular`). */
@Component({
  selector: 'app-fa-icon',
  template: `<i [class]="classes()" aria-hidden="true"></i>`,
})
export class FaIcon {
  readonly icon = input.required<string>();
  readonly size = input<'sm' | 'md' | 'lg' | 'xl'>('md');
  /** Tailwind classes for icon color, e.g. gradient or `text-red-500` */
  readonly accentClass = input<string>('');

  protected readonly classes = computed(() => {
    const sizeClass = {
      sm: 'text-base',
      md: 'text-xl',
      lg: 'text-3xl',
      xl: 'text-5xl',
    }[this.size()];
    const accent = this.accentClass();
    return [this.icon(), sizeClass, accent].filter(Boolean).join(' ');
  });
}
