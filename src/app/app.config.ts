import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideTransloco } from '@jsverse/transloco';
import config, { AvailableLanguages, AvailableLanguagesList } from './components/lang/transloco-config';
import { TranslocoHttpLoader } from './components/lang/transloco-loader';

export const appConfig: ApplicationConfig = {
   providers: [
    provideZoneChangeDetection(),
    provideRouter(routes),
    provideHttpClient(),
    provideTransloco({
      config: {
        availableLangs: AvailableLanguagesList,
        defaultLang: config.defaultLang,
        // Remove this option if your application doesn't support changing language in runtime.
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader,
    }),
  ],
};
function provideBrowserGlobalErrorListeners(): import("@angular/core").Provider | import("@angular/core").EnvironmentProviders {
  throw new Error('Function not implemented.');
}

