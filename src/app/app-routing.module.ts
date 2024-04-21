import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', pathMatch: 'full', redirectTo: 'home' 
  },
  {
    path: 'home',
    loadChildren: () => 
      import('./features/feature-portfolio/feature-portfolio.module').then((m) => m.FeaturePortfolioModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
