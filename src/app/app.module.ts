import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgOptimizedImage, provideImgixLoader } from '@angular/common';

@NgModule({ declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        CoreModule,
        BrowserAnimationsModule,
        NgOptimizedImage], providers: [
        provideImgixLoader('http://localhost:4200/assets/images/'),
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule { }
