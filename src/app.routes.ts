import { Routes } from "@angular/router";
import { FeaturePortfolioHeroComponent } from "./app/features/feature-portfolio/components/feature-portfolio-hero/feature-portfolio-hero.component";
import { HomePageComponent } from "app/features/feature-portfolio/pages/home-page/home-page.component";
import { AboutPageComponent } from "app/features/feature-portfolio/pages/about-page/about-page.component";
import { PortfolioPageComponent } from "app/features/feature-portfolio/pages/portfolio-page/portfolio-page.component";
import { ServicePageComponent } from "app/features/feature-portfolio/pages/service-page/service-page.component";
import { BlogPageComponent } from "app/features/feature-portfolio/pages/blog-page/blog-page.component";
import { SingleBlogPageComponent } from "app/features/feature-portfolio/pages/single-blog-page/single-blog-page.component";
import { ContactPageComponent } from "app/features/feature-portfolio/pages/contact-page/contact-page.component";
import { NotFoundComponent } from "app/core/pages/not-found/not-found.component";
import { SinglePortfolioPageComponent } from "app/features/feature-portfolio/pages/single-portfolio-page/single-portfolio-page.component";


export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'portfolio', component: PortfolioPageComponent },
  { path: 'service', component: ServicePageComponent },
  { path: 'blog', component: BlogPageComponent },
  { path: 'single-blog', component: SingleBlogPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'notfound', component: NotFoundComponent },
  { path: 'single-portfolio-page/:id', component: SinglePortfolioPageComponent }
];
