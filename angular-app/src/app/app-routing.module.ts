import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { UserService } from './services/user.service';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { LocationsComponent } from './components/locations/locations.component';
import { LocationComponent } from './components/location/location.component';
import { MatchesComponent } from './components/matches/matches.component';
import { AttractionsComponent } from './components/attractions/attractions.component';
import { AttractionComponent } from './components/attraction/attraction.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: []
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [UserService]
  },
  {
    path: 'locations',
    component: LocationsComponent,
    canActivate: [UserService]
  },
  {
    path: 'matches',
    component: MatchesComponent,
    canActivate: [UserService]
  },
  {
    path: 'attractions',
    component: AttractionsComponent,
    canActivate: [UserService]
  },
  {
    path: 'attraction/:id',
    component: AttractionComponent,
    canActivate: [UserService]
  },
  {
    path: 'location',
    component: LocationComponent,
    canActivate: [UserService]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [UserService]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
    canActivate: []
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    canActivate: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
