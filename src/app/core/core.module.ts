import { NgModule } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShellComponent } from './components/shell/shell.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FeaturePortfolioModule } from '../features/feature-portfolio/feature-portfolio.module';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    ShellComponent,
    NotFoundComponent
  ],
  imports: [
    RouterModule,
    MatButtonModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSelectModule,
    MatIconModule,
    FeaturePortfolioModule
  ],
  exports: [
    ShellComponent
  ]
})
export class CoreModule { }
