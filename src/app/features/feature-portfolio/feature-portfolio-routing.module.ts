import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ServicePageComponent } from "./pages/service-page/service-page.component";
import { BlogPageComponent } from "./pages/blog-page/blog-page.component";
import { PortfolioPageComponent } from "./pages/portfolio-page/portfolio-page.component";
import { AboutPageComponent } from "./pages/about-page/about-page.component";
import { SingleBlogPageComponent } from "./pages/single-blog-page/single-blog-page.component";
import { ContactPageComponent } from "./pages/contact-page/contact-page.component";
import { NotFoundComponent } from "src/app/core/pages/not-found/not-found.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { SinglePortfolioPageComponent } from "./pages/single-portfolio-page/single-portfolio-page.component";

const routes: Routes = [
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

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})

export class FeaturePortfolioRoutingModule { }