import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CarFilterPipe } from './pipes/carFilter.pipe';
import { BackgroundDirective } from './directives/background.directive';
import { CarsComponent } from './cars/cars.component';
import { AddCarComponent } from './add-car/add-car.component';
import { ConsoleService } from './console.service';











@NgModule({
  declarations: [
    AppComponent,
    CarFilterPipe,
    BackgroundDirective,
    CarsComponent,
    AddCarComponent  
  ],
  imports: [
    BrowserModule,
   	FormsModule,
   	HttpModule
  ],
  providers: [ ConsoleService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
