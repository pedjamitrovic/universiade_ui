import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { LocationsComponent } from './components/locations/locations.component';
import { LocationComponent } from './components/location/location.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatchesComponent } from './components/matches/matches.component';
import { AttractionsComponent } from './components/attractions/attractions.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AttractionComponent } from './components/attraction/attraction.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { GalleryDialogComponent } from './components/attraction/gallery-dialog/gallery-dialog.component';
import { RatingModule } from 'ng-starrating';
import { ChangeRequestsComponent } from './components/change-requests/change-requests.component';
import { MatchesWithoutVenueComponent } from './components/matches-without-venue/matches-without-venue.component';
import { ReserveVenueComponent } from './components/reserve-venue/reserve-venue.component';
import { MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatSnackBarModule } from '@angular/material';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    PageNotFoundComponent,
    HomeComponent,
    LocationsComponent,
    LocationComponent,
    MatchesComponent,
    AttractionsComponent,
    AttractionComponent,
    GalleryDialogComponent,
    ChangeRequestsComponent,
    MatchesWithoutVenueComponent,
    ReserveVenueComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    RatingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSnackBarModule,
    LayoutModule,
    MatListModule,
  ],
  exports: [
  ],
  providers: [],
  entryComponents: [GalleryDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
