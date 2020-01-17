import { Injectable } from '@angular/core';
import { Attraction } from '../model/attraction';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class AttractionService {
  constructor(private message: MessageService) {
    Attraction.InitDb();
  }

  get attractions(): Attraction[] {
    return JSON.parse(localStorage.getItem('attractions')) as Attraction[];
  }

  set attractions(attractions) {
    localStorage.setItem('attractions', JSON.stringify(attractions));
  }
}
