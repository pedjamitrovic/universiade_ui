import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { FormGroup, FormControl } from '@angular/forms';

export interface Match {
  host: string;
  visitor: string;
  date: string;
  time: string;
  venue: string;
}

const matches: Match[] = [
  { host: 'Serbia', visitor: 'USA', date: '2020-05-10', time: '21:00', venue: 'Kombank Arena' },
  { host: 'Serbia', visitor: 'Spain', date: '2020-05-11', time: '21:00', venue: 'Aleksandar Nikolić Hall' },
  { host: 'Serbia', visitor: 'Italy', date: '2020-05-12', time: '21:00', venue: 'Kombank Arena' },
  { host: 'Serbia', visitor: 'France', date: '2020-05-13', time: '21:00', venue: 'Kombank Arena' }
];

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {
  filterForm: FormGroup;
  displayedColumns: string[];
  dataSource = new MatTableDataSource(matches);

  constructor() { }

  ngOnInit() {
    this.filterForm = new FormGroup({
      date: new FormControl('', []),
      time: new FormControl('', []),
      venue: new FormControl('', [])
    });
    this.displayedColumns = ['host', 'visitor', 'date', 'time', 'venue'];
  }

  filterMatches() {
    let filteredMatches = matches;
    if (this.filterForm.controls.date.value) {
      filteredMatches = filteredMatches.filter(
        (match) => match.date.trim().toLowerCase().includes(this.filterForm.controls.date.value.trim().toLowerCase())
      );
    }
    if (this.filterForm.controls.time.value) {
      filteredMatches = filteredMatches.filter(
        (match) => match.time.trim().toLowerCase().includes(this.filterForm.controls.time.value.trim().toLowerCase())
      );
    }
    if (this.filterForm.controls.venue.value) {
      filteredMatches = filteredMatches.filter(
        (match) => match.venue.trim().toLowerCase().includes(this.filterForm.controls.venue.value.trim().toLowerCase())
      );
    }
    this.dataSource = new MatTableDataSource(filteredMatches);
  }
}
