import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Venue } from '../model/venue';

@Injectable({
  providedIn: 'root'
})
export class VenueService {
  constructor(private router: Router, private route: ActivatedRoute) {
    Venue.InitDb();
  }

  get venues(): Venue[] {
    return JSON.parse(localStorage.getItem('venues')) as Venue[];
  }

  set venues(venues) {
    localStorage.setItem('venues', JSON.stringify(venues));
  }
}
