import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PortfolioHomePageComponent as HomePageComponent } from "./pages/portfolio-home-page/portfolio-home-page.component";
import { ServicePageComponent } from "./pages/service-page/service-page.component";
import { BlogPageComponent } from "./pages/blog-page/blog-page.component";
import { PortfolioPageComponent } from "./pages/portfolio-page/portfolio-page.component";
import { AboutPageComponent } from "./pages/about-page/about-page.component";

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'about', component: AboutPageComponent},
  { path: 'portfolio', component: PortfolioPageComponent},
  { path: 'service', component: ServicePageComponent},
  { path: 'blog', component: BlogPageComponent},
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})

export class FeaturePortfolioRoutingModule { }