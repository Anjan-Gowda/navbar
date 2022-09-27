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

@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule,ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent,HomeComponent,LoginComponent,MoviesComponent,NavbarComponent,CarsComponent ],
  bootstrap:    [ AppComponent ],
  providers:[AuthGuard,AuthService]
})
export class AppModule { }
