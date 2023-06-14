import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MenuBarComponent } from './common/menu-bar/menu-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ContactBoxComponent } from './pages/contact/contact-box/contact-box.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceBoxComponent } from './pages/home/service-box/service-box.component';
import { DetailsComponent } from './pages/home/details/details.component';
import { ReviewBoxComponent } from './pages/reviews/review-box/review-box.component';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HomeComponent,
    ProjectsComponent,
    ReviewsComponent,
    ContactComponent,
    ContactBoxComponent,
    ServiceBoxComponent,
    DetailsComponent,
    ReviewBoxComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }