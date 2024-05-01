import { NgModule } from "@angular/core";
import { PortfolioHomePageComponent } from "./pages/portfolio-home-page/portfolio-home-page.component";
import { FeaturePortfolioRoutingModule } from "./feature-portfolio-routing.module";
import { FeaturePortfolioHeroComponent } from "./components/feature-portfolio-hero/feature-portfolio-hero.component";
import { ChessBackgroundComponent } from "./components/chess-background/chess-background.component";
import { HeroSectionComponent } from "./components/hero-section/hero-section.component";
import { StatisticComponent } from "./components/statistic/statistic.component";
import { ResumeSectionComponent } from "./components/resume-section/resume-section.component";
import { PortfolioSectionComponent } from "./components/portfolio-section/portfolio-section.component";
import { ServiceSectionComponent } from "./components/service-section/service-section.component";
import { TestimonialSectionComponent } from "./components/testimonial-section/testimonial-section.component";
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BlogSectionComponent } from "./components/blog-section/blog-section.component";
import { PageHeadingComponent } from "./components/page-heading/page-heading.component";
import { AboutPageComponent } from "./pages/about-page/about-page.component";
import { PortfolioPageComponent } from "./pages/portfolio-page/portfolio-page.component";
import { ServicePageComponent } from "./pages/service-page/service-page.component";
import { BlogPageComponent } from "./pages/blog-page/blog-page.component";
import { ContactPageComponent } from "./pages/contact-page/contact-page.component";
import { SingleBlogPageComponent } from "./pages/single-blog-page/single-blog-page.component";

@NgModule({
  declarations: [
    PortfolioHomePageComponent,
    AboutPageComponent,
    PortfolioPageComponent,
    ServicePageComponent,
    BlogPageComponent,
    SingleBlogPageComponent,
    
    ContactPageComponent,

    FeaturePortfolioHeroComponent,
    ChessBackgroundComponent,
    HeroSectionComponent,
    StatisticComponent,
    ResumeSectionComponent,
    PortfolioSectionComponent,
    ServiceSectionComponent,
    TestimonialSectionComponent,
    BlogSectionComponent,
    PageHeadingComponent
  ],
  imports: [
    FeaturePortfolioRoutingModule,
    MatProgressBarModule
  ],
  providers: []
})

export class FeaturePortfolioModule { }