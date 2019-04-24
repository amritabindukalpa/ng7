import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// added additionally
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
// set-up components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// project defined components
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // router
    HttpClientModule, // added for services
    ReactiveFormsModule // added for form submits
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
