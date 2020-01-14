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
import { ChangeRequestsComponent } from './components/change-requests/change-requests.component';
import { MatchesWithoutVenueComponent } from './components/matches-without-venue/matches-without-venue.component';
import { ReserveVenueComponent } from './components/reserve-venue/reserve-venue.component';
import { UserGuard } from './services/user-guard.service';
import { UserType } from './model/user';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: []
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [UserGuard],
    data: {
      expectedRoles: [UserType.Student, UserType.Admin]
    }
  },
  {
    path: 'locations',
    component: LocationsComponent,
    canActivate: [UserGuard],
    data: {
      expectedRoles: [UserType.Student]
    }
  },
  {
    path: 'matches',
    component: MatchesComponent,
    canActivate: [UserGuard],
    data: {
      expectedRoles: [UserType.Student]
    }
  },
  {
    path: 'attractions',
    component: AttractionsComponent,
    canActivate: [UserGuard],
    data: {
      expectedRoles: [UserType.Student]
    }
  },
  {
    path: 'attraction/:id',
    component: AttractionComponent,
    canActivate: [UserGuard],
    data: {
      expectedRoles: [UserType.Student]
    }
  },
  {
    path: 'location/:id',
    component: LocationComponent,
    canActivate: [UserGuard],
    data: {
      expectedRoles: [UserType.Student]
    }
  },
  {
    path: 'change-requests',
    component: ChangeRequestsComponent,
    canActivate: [UserGuard],
    data: {
      expectedRoles: [UserType.Admin]
    }
  },
  {
    path: 'matches-without-venue',
    component: MatchesWithoutVenueComponent,
    canActivate: [UserGuard],
    data: {
      expectedRoles: [UserType.Admin]
    }
  },
  {
    path: 'reserve-venue',
    component: ReserveVenueComponent,
    canActivate: [UserGuard],
    data: {
      expectedRoles: [UserType.Admin]
    }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [UserGuard],
    data: {
      expectedRoles: [UserType.Student, UserType.Admin]
    }
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
    canActivate: []
  },
  {
    path: 'error-404',
    component: PageNotFoundComponent,
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
