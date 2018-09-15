import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CarFilterPipe } from './pipes/carFilter.pipe';
import { BackgroundDirective } from './directives/background.directive';
import { CarsComponent } from './cars/cars.component';
import { FormComponent } from './form/form.component';








@NgModule({
  declarations: [
    AppComponent,
    CarFilterPipe,
    BackgroundDirective,
    CarsComponent,
    FormComponent
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
