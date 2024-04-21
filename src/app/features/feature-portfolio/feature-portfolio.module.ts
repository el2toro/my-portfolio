import { NgModule } from "@angular/core";
import { PortfolioHomePageComponent } from "./pages/portfolio-home-page/portfolio-home-page.component";
import { FeaturePortfolioRoutingModule } from "./feature-portfolio-routing.module";
import { FeaturePortfolioHeroComponent } from "./components/feature-portfolio-hero/feature-portfolio-hero.component";

@NgModule({
  declarations: [
    PortfolioHomePageComponent,
    FeaturePortfolioHeroComponent

  ],
  imports: [
    FeaturePortfolioRoutingModule
  ],
  providers: []
})

export class FeaturePortfolioModule { }