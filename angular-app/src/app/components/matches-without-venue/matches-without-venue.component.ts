import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-matches-without-venue',
  templateUrl: './matches-without-venue.component.html',
  styleUrls: ['./matches-without-venue.component.scss']
})
export class MatchesWithoutVenueComponent implements OnInit {
  matchesWithoutVenueForm: FormGroup;
  venues: any[] = ['1st venue', '2nd venue'];
  paginator: { page: number, itemsPerPage: number } = { page: 0, itemsPerPage: 1 };
  matchesWithoutVenue: {userId: number, description: string, oldLocation: string}[] = [
    {
      userId: 1,
      description: 'The restaurant is awful! I want to eat in a restaurant, not in a butcher shop.',
      oldLocation: 'Mesara Momčilo'
    },
    {
      userId: 2,
      description: 'The restaurant is awful! Can I eat in a restaurant with Italian cuisine?',
      oldLocation: 'Mesara Momčilo'
    },
    {
      userId: 3,
      description: 'The restaurant is awful! Can I eat in a restaurant with Spanish cuisine?',
      oldLocation: 'Mesara Momčilo'
    }
  ];
  pagedMatches: {userId: number, description: string, oldLocation: string}[];

  constructor() { }

  ngOnInit() {
    this.initForm();
    this.paginate();
  }

  initForm() {
    this.matchesWithoutVenueForm = new FormGroup({
      venue: new FormControl({value: '1st location'}, [Validators.required])
    });
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
  }
}
