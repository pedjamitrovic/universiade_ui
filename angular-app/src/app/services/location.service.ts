import { Injectable } from '@angular/core';
import { Location, LocationType } from '../model/location';
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

  get locations(): Location[] {
    return JSON.parse(localStorage.getItem('locations')) as Location[];
  }

  set locations(locations) {
    localStorage.setItem('locations', JSON.stringify(locations));
  }
}
