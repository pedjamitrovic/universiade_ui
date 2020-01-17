import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormControl } from '@angular/forms';
import { Match } from 'src/app/model/match';
import { UserService } from 'src/app/services/user.service';
import { formatDate } from "@angular/common";

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {
  matches: Match[];
  filterForm: FormGroup;
  displayedColumns: string[];
  dataSource: MatTableDataSource<Match>;

  constructor(private userService: UserService) {
    this.initForm();
  }

  ngOnInit() {
    this.initData();
  }

  initForm() {
    this.filterForm = new FormGroup({
      date: new FormControl('', []),
      time: new FormControl('', []),
      venue: new FormControl('', [])
    });
    this.displayedColumns = ['host', 'visitor', 'date', 'time', 'venue'];
  }

  initData() {
    this.matches = this.userService.getMatches();
    this.dataSource = new MatTableDataSource(this.matches);
  }

  filterMatches() {
    let filteredMatches = this.matches;
    if (this.filterForm.controls.date.value) {
      filteredMatches = filteredMatches.filter(
        (match) => {
          let date = formatDate(match.date, 'dd.MM.yyyy.', 'en-US');
          return date.includes(this.filterForm.controls.date.value.trim());
        }
      );
    }
    if (this.filterForm.controls.time.value) {
      filteredMatches = filteredMatches.filter(
        (match) => {
          let time = formatDate(match.date, 'HH:mm', 'en-US');
          return time.includes(this.filterForm.controls.time.value.trim());
        }
      );
    }
    if (this.filterForm.controls.venue.value) {
      filteredMatches = filteredMatches.filter(
        (match) => {
          let venue = match.venue ? match.venue.toLowerCase() : '?';
          let enteredVenue = this.filterForm.controls.venue.value.trim().toLowerCase();
          return venue.includes(enteredVenue);
        }
      );
    }
    this.dataSource = new MatTableDataSource(filteredMatches);
  }
}
