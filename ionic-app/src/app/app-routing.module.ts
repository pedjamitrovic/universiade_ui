import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UserType } from './model/user';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { UserGuard } from './services/user-guard.service';
import { LocationsComponent } from './components/locations/locations.component';
import { MatchesComponent } from './components/matches/matches.component';
import { AttractionsComponent } from './components/attractions/attractions.component';
import { AttractionComponent } from './components/attraction/attraction.component';
import { LocationComponent } from './components/location/location.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

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
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
