import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CarFilterPipe } from './pipes/carFilter.pipe';
import { BackgroundDirective } from './directives/background.directive';
import { BlackListService } from './blacklist.service';







@NgModule({
  declarations: [
    AppComponent,
    CarFilterPipe,
    BackgroundDirective,
  
  ],
  imports: [
    BrowserModule,
   	HttpModule,
    ReactiveFormsModule
  ],
  providers: [BlackListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
