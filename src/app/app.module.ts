import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ButtonComponent } from './components/button/button.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HederComponent } from './components/heder/heder.component';
import { HederCardComponent } from './components/heder-card/heder-card.component';
import { SectionComponent } from './components/section/section.component';
import { TestimonialCardComponent } from './components/testimonial-card/testimonial-card.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ButtonComponent,
    NavBarComponent,
    HederComponent,
    HederCardComponent,
    SectionComponent,
    TestimonialCardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
