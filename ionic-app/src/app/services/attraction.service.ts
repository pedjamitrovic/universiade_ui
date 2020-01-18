import { Injectable } from '@angular/core';
import { Attraction } from '../model/attraction';
import { MessageService } from './message.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AttractionService {
  constructor(private message: MessageService, private userService: UserService) {
    Attraction.InitDb();
  }

  getAttraction(attractionId: number): Attraction {
    return this.attractions.find((a) => a.id === attractionId);
  }

  like(attractionId: number) {
    let attractions = this.attractions;

    let attraction = this.getAttraction(attractionId);

    attraction.likes.push(this.userService.user.id);

    for (let i = 0; i < attractions.length; ++i) {
      if (attractions[i].id === attractionId) attractions[i] = attraction;
    }

    this.attractions = attractions;

    this.message.success('Attraction ' + attraction.name + ' successfully liked');
  }

  dislike(attractionId: number) {
    let attractions = this.attractions;

    let attraction = this.getAttraction(attractionId);

    const index = attraction.likes.indexOf(this.userService.user.id);
    if (index > -1) {
      attraction.likes.splice(index, 1);
    }

    for (let i = 0; i < attractions.length; ++i) {
      if (attractions[i].id === attractionId) attractions[i] = attraction;
    }

    this.attractions = attractions;

    this.message.success('Attraction ' + attraction.name + ' successfully disliked');
  }

  get attractions(): Attraction[] {
    return JSON.parse(localStorage.getItem('attractions')) as Attraction[];
  }

  set attractions(attractions) {
    localStorage.setItem('attractions', JSON.stringify(attractions));
  }
}
