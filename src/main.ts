import { enableProdMode } from '@angular/core';

import { environment } from './environments/environment';
import { AppComponent } from 'app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'
import { provideAnimations } from '@angular/platform-browser/animations';


if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideAnimations(), // required if you use Angular Material
  ],
})
  .catch(err => console.error(err));
