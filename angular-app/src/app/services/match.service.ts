import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Match } from '../model/match';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  constructor(private message: MessageService) {
    Match.InitDb();
  }

  assignVenue(matchId: number, venueName: string) {
    let matches = this.matches;

    for (let i = 0; i < matches.length; ++i) {
      if (matches[i].id === matchId) matches[i].venue = venueName;
    }

    this.matches = matches;
    this.message.success('Venue successfully assigned');
  }

  get matches(): Match[] {
    return JSON.parse(localStorage.getItem('matches')) as Match[];
  }

  set matches(matches) {
    localStorage.setItem('matches', JSON.stringify(matches));
  }
}
