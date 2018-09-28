import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CarService } from './car.service';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
   	HttpModule,
   
  ],
  providers: [ CarService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
