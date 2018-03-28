import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HtopnavbarComponent } from './htopnavbar/htopnavbar.component';
import { HomeComponent } from './home/home.component';
import { TermsComponent } from './terms/terms.component';




@NgModule({
  declarations: [
    AppComponent,
    HtopnavbarComponent,
    HomeComponent,
    TermsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
