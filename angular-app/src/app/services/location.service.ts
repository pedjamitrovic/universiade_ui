import { Injectable } from '@angular/core';
import { Location, LocationType, Review, ChangeRequest } from '../model/location';
import { MessageService } from './message.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor(private message: MessageService, private userService: UserService) {
    Location.InitDb();
  }

  acceptChangeRequest(userId: number, oldLocation: string, newLocationId: number) {
    let newLocationType = this.removeChangeRequest(userId, oldLocation);

    this.userService.updateLocation(userId, newLocationId, newLocationType);

    this.message.success('Change request successfully accepted');
  }

  rejectChangeRequest(userId: number, oldLocation: string) {
    this.removeChangeRequest(userId, oldLocation);
    this.message.success('Change request successfully rejected');
  }

  private removeChangeRequest(userId: number, oldLocation: string): LocationType {
    let locations = this.locations;

    let location = locations.find((l) => l.name === oldLocation);
    const index = location.changeRequests.findIndex((cr) => cr.userId === userId && cr.oldLocation === oldLocation);
    if (index > -1) {
      location.changeRequests.splice(index, 1);
    }

    for (let i = 0; i < locations.length; ++i) {
      if (locations[i].id === location.id) locations[i] = location;
    }

    this.locations = locations;

    return location.type;
  }

  getLocation(locationId: number) {
    return this.locations.find((l) => l.id === locationId);
  }

  postReview(locationId: number, review: Review) {
    let locations = this.locations;

    let location = locations.find((l) => l.id === locationId);

    let updatedReview = false;

    for (let i = 0; i < location.reviews.length; ++i) {
      if (location.reviews[i].userId === review.userId) {
        location.reviews[i] = review;
        updatedReview = true;
      }
    }

    if (!updatedReview) location.reviews.push(review);

    this.locations = locations;

    this.message.success('You have successfully posted review');
  }

  submitRequest(locationId: number, request: ChangeRequest) {
    let locations = this.locations;

    let location = locations.find((l) => l.id === locationId);

    let updatedRequest = false;

    for (let i = 0; i < location.changeRequests.length; ++i) {
      if (location.changeRequests[i].userId === request.userId) {
        location.changeRequests[i] = request;
        updatedRequest = true;
      }
    }

    if (!updatedRequest) location.changeRequests.push(request);

    this.locations = locations;

    this.message.success('You have successfully submitted change request');
  }

  get locations(): Location[] {
    return JSON.parse(localStorage.getItem('locations')) as Location[];
  }

  set locations(locations) {
    localStorage.setItem('locations', JSON.stringify(locations));
  }
}
