import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthGuard } from './services/auth.guard';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';
import { CarsComponent } from './cars/cars.component';
import { ModalComponent } from './modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AlertsComponent } from './alerts/alerts.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({ 
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    LoginComponent,
    MoviesComponent,
    NavbarComponent,
    CarsComponent,
    ModalComponent,
    AlertsComponent,
    CarouselComponent
  ],
  bootstrap: [AppComponent],
  providers: [AuthGuard, AuthService],
})
export class AppModule {}
