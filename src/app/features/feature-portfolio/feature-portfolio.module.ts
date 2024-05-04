import { NgModule } from "@angular/core";
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
import { SinglePortfolioPageComponent } from "./pages/single-portfolio-page/single-portfolio-page.component";
import { MatIconModule } from "@angular/material/icon";
import { AboutMeSectionComponent } from "./components/about/about-me-section/about-me-section.component";
import { ExperienceSectionComponent } from "./components/about/experience-section/experience-section.component";
import { SkillsSectionComponent } from "./components/about/skills-section/skills-section.component";
import { PartnerSectionComponent } from "./components/about/partner-section/partner-section.component";
import { AchievementSectionComponent } from "./components/about/achievement-section/achievement-section.component";
import { ResumeAwardsSectionComponent } from "./components/resume/resume-awards-section/resume-awards-section.component";
import { ResumeEducationSectionComponent } from "./components/resume/resume-education-section/resume-education-section.component";
import { ResumeExperienceSectionComponent } from "./components/resume/resume-experience-section/resume-experience-section.component";
import { ResumeSkillsSectionComponent } from "./components/resume/resume-skills-section/resume-skills-section.component";
import { ResumeAboutMeSectionComponent } from "./components/resume/resume-about-me-section/resume-about-me-section.component";
import { HomePageComponent } from "./pages/portfolio-home-page/home-page.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    PortfolioPageComponent,
    ServicePageComponent,
    BlogPageComponent,
    SingleBlogPageComponent,
    SinglePortfolioPageComponent,
    ContactPageComponent,

    AboutMeSectionComponent,
    ExperienceSectionComponent,
    SkillsSectionComponent,
    PartnerSectionComponent,
    AchievementSectionComponent,

    ResumeAboutMeSectionComponent,
    ResumeAwardsSectionComponent,
    ResumeEducationSectionComponent,
    ResumeExperienceSectionComponent,
    ResumeSkillsSectionComponent,
    
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
    CommonModule,
    FeaturePortfolioRoutingModule,
    MatProgressBarModule,
    MatIconModule
  ],
  providers: []
})

export class FeaturePortfolioModule { }