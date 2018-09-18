import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CarFilterPipe } from './pipes/carFilter.pipe';
import { BackgroundDirective } from './directives/background.directive';







@NgModule({
  declarations: [
    AppComponent,
    CarFilterPipe,
    BackgroundDirective,
  
  ],
  imports: [
    BrowserModule,
   	FormsModule,
   	HttpModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
