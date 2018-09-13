import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BackgroundDirective } from './directives/background.directive';
import { PowPipe } from './pipeComponent/pow.pipe';






@NgModule({
  declarations: [
    AppComponent,
    BackgroundDirective,
    PowPipe
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
