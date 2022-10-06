import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { CarsComponent } from '../cars/cars.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { MoviesComponent } from '../movies/movies.component';
import { AuthGuard } from '../services/auth.guard';

const routes: Routes = [
  { 
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'movies',
    component: MoviesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'cars',
    component: CarsComponent,
    canActivate: [AuthGuard],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
