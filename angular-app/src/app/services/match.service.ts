import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Match } from '../model/match';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  constructor(private router: Router, private route: ActivatedRoute) {
    Match.InitDb();
  }

  get matches(): Match[] {
    return JSON.parse(localStorage.getItem('matches')) as Match[];
  }

  set matches(matches) {
    localStorage.setItem('matches', JSON.stringify(matches));
  }
}
