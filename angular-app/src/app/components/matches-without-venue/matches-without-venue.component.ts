import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MessageService } from 'src/app/services/message.service';
import { MatchService } from 'src/app/services/match.service';
import { VenueService } from 'src/app/services/venue.service';
import { Venue } from 'src/app/model/venue';
import { Match } from 'src/app/model/match';

@Component({
  selector: 'app-matches-without-venue',
  templateUrl: './matches-without-venue.component.html',
  styleUrls: ['./matches-without-venue.component.scss']
})
export class MatchesWithoutVenueComponent implements OnInit {
  matchesWithoutVenueForm: FormGroup;
  venues: Venue[];
  filteredVenues: Venue[];
  matchesWithoutVenue: Match[];
  pagedMatches: Match[];
  paginator: { page: number, itemsPerPage: number } = { page: 0, itemsPerPage: 1 };

  constructor(private message: MessageService, private matchService: MatchService, private venueService: VenueService) {
    this.initForm();
  }

  ngOnInit() {
    this.initData();
    this.paginate();
  }

  initForm() {
    this.matchesWithoutVenueForm = new FormGroup({
      venue: new FormControl({ value: '' }, [Validators.required])
    });
  }

  initData() {
    this.matchesWithoutVenue = this.matchService.matches.filter((m) => !m.venue);
    this.venues = this.venueService.venues;
  }

  filterVenues() {
    if (!this.matchesWithoutVenue.length) return;
    this.matchesWithoutVenueForm.controls.venue.setValue('');
    this.matchesWithoutVenueForm.controls.venue.markAsUntouched();
    let matchDate = this.pagedMatches[0].date;
    let reservedVenues = this.matchService.matches.filter((m) => m.venue && m.date === matchDate).map((m) => m.venue);
    this.filteredVenues = this.venues.filter((v) => !reservedVenues.includes(v.name) && v.fromDate <= matchDate && v.toDate >= matchDate);
  }

  nextPage() {
    ++this.paginator.page;
    this.paginate();
  }

  previousPage() {
    --this.paginator.page;
    this.paginate();
  }

  nextExists() {
    if (!this.matchesWithoutVenue) { return false; }
    return this.paginator.page * this.paginator.itemsPerPage + this.paginator.itemsPerPage < this.matchesWithoutVenue.length;
  }

  previousExists() {
    if (!this.matchesWithoutVenue) { return false; }
    return (this.paginator.page - 1) * this.paginator.itemsPerPage + this.paginator.itemsPerPage > 0;
  }

  paginate() {
    this.pagedMatches = this.matchesWithoutVenue.slice(
      this.paginator.page * this.paginator.itemsPerPage,
      this.paginator.page * this.paginator.itemsPerPage + this.paginator.itemsPerPage
    );
    this.filterVenues();
  }

  assignVenue() {
    if (this.matchesWithoutVenueForm.invalid) return;
    this.matchService.assignVenue(this.pagedMatches[0].id, this.matchesWithoutVenueForm.controls.venue.value);
    this.initData();
    this.paginate();
  }
}
