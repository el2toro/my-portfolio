import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PortfolioHomePageComponent } from "./pages/portfolio-home-page/portfolio-home-page.component";

const routes: Routes = [
  { path: '', component: PortfolioHomePageComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})

export class FeaturePortfolioRoutingModule { }