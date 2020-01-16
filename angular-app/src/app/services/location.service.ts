import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '../model/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor(private router: Router, private route: ActivatedRoute) {
    Location.InitDb();
  }

  get locations(): Location[] {
    return JSON.parse(localStorage.getItem('locations')) as Location[];
  }

  set locations(locations) {
    localStorage.setItem('locations', JSON.stringify(locations));
  }
}
