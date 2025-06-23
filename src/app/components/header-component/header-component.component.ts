import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
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
  themeService = inject(ThemeService);
  languageService = inject(LanguageService);

  onToggleTheme(): void {
    this.themeService.toggleTheme();
  }

  onToggleLanguage() {
    this.languageService.onToggleLanguage();
  }
}
