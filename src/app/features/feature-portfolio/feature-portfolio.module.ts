import { NgModule } from "@angular/core";
import { PortfolioHomePageComponent } from "./pages/portfolio-home-page/portfolio-home-page.component";
import { FeaturePortfolioRoutingModule } from "./feature-portfolio-routing.module";
import { FeaturePortfolioHeroComponent } from "./components/feature-portfolio-hero/feature-portfolio-hero.component";
import { ShahBackgroundComponent } from "./components/shah-background/shah-background.component";
import { HeroSectionComponent } from "./components/hero-section/hero-section.component";
import { StatisticComponent } from "./components/statistic/statistic.component";
import { ResumeSectionComponent } from "./components/resume-section/resume-section.component";
import { PortfolioSectionComponent } from "./components/portfolio-section/portfolio-section.component";
import { ServiceSectionComponent } from "./components/service-section/service-section.component";
import { TestimonialSectionComponent } from "./components/testimonial-section/testimonial-section.component";
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    PortfolioHomePageComponent,
    FeaturePortfolioHeroComponent,
    ShahBackgroundComponent,
    HeroSectionComponent,
    StatisticComponent,
    ResumeSectionComponent,
    PortfolioSectionComponent,
    ServiceSectionComponent,
    TestimonialSectionComponent
  ],
  imports: [
    FeaturePortfolioRoutingModule,
    MatProgressBarModule
  ],
  providers: []
})

export class FeaturePortfolioModule { }