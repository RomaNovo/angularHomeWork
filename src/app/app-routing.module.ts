import { NgModule } from "@angular/core";
import { HomePageComponent } from "./home-page/home-page.component";
import { CarsPageComponent } from "./cars-page/cars-page.component";
import { Routes, RouterModule } from "@angular/router";

const appRoutes: Routes = [
    { path:'cars', component: CarsPageComponent },
    { path:'', component: HomePageComponent }
]

@NgModule ({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}