import { ChangeDetectionStrategy, Component, HostListener, inject, signal } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { LanguageService } from '../../services/language.service';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-header-component',
  imports: [TranslocoModule],
  templateUrl: './header-component.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponentComponent {
  readonly themeService = inject(ThemeService);
  readonly lang = inject(LanguageService);

  langOpen = signal(false);

  toggleTheme() { this.themeService.toggleTheme(); }
  toggleLangMenu() { this.langOpen.update(v => !v); }
  selectLang(code: string) { this.lang.set(code); this.langOpen.set(false); }

  @HostListener('document:click', ['$event'])
  onDocClick(ev: MouseEvent) {
    const el = ev.target as HTMLElement;
    if (el.closest('#lang-toggle') || el.closest('#lang-menu')) return;
    this.langOpen.set(false);
  }
}
