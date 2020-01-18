import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Venue } from '../model/venue';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class VenueService {
  constructor(private message: MessageService) {
    Venue.InitDb();
  }

  reserveVenue(fromDate: Date, toDate: Date) {
    let venues = this.venues;

    let newId = ++venues[this.venues.length - 1].id;

    let venue = new Venue();
    venue.id = newId;
    venue.name = 'New Venue ' + newId;
    venue.fromDate = fromDate;
    venue.toDate = toDate;

    venues.push(venue);

    this.venues = venues;

    this.message.success('Venue with name ' + venue.name + ' successfully created');
  }

  get venues(): Venue[] {
    return JSON.parse(localStorage.getItem('venues')) as Venue[];
  }

  set venues(venues) {
    localStorage.setItem('venues', JSON.stringify(venues));
  }
}
