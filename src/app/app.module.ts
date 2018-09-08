import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './car/car.component';
import { AddCarComponent } from './add-car/add-car.component';
import { ChildCompComponent } from './child-comp/child-comp.component';



@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    AddCarComponent,
    ChildCompComponent
  ],
  imports: [
    BrowserModule,
   	FormsModule,
   	HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
