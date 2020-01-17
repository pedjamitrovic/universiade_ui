import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../model/user';
import { MessageService } from './message.service';
import { LocationType } from '../model/location';
import { MatchService } from './match.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private router: Router, private message: MessageService, private matchService: MatchService) {
    User.InitDb();
  }

  login(username: string, password: string) {
    const user = this.users.find((u) => u.username === username && u.password === password);
    if (user) {
      this.user = user;
      this.router.navigate(['home']);
    }
  }

  logout() {
    this.user = null;
    this.router.navigate(['login']);
  }

  changeProfileInfo(firstName: string, lastName: string, phoneNumber: string, homeAddress: string, username: string, password: string) {
    let users = this.users;
    if (this.user.username !== username && users.find((u) => u.username === username)) {
      this.message.error('User with provided username already exists');
      return;
    }
    if (password.length < 8) {
      this.message.error('Password must be at least 8 characters long');
      return;
    }

    let user = this.user;
    user.firstName = firstName;
    user.lastName = lastName;
    user.phoneNumber = phoneNumber;
    user.homeAddress = homeAddress;
    user.username = username;
    user.password = password;

    this.user = user;

    for (let i = 0; i < users.length; ++i) {
      if (users[i].id === this.user.id) users[i] = this.user;
    }

    this.users = users;

    this.message.success('Profile information successfully changed');
  }

  updateLocation(userId: number, newLocationId: number, newLocationType: LocationType) {
    let users = this.users;

    let user = users.find((u) => u.id === userId);
    if (newLocationType === LocationType.Accomodation) user.accomodation = newLocationId;
    else if (newLocationType === LocationType.Restaurant) user.restaurant = newLocationId;
    this.user = user;

    for (let i = 0; i < users.length; ++i) {
      if (users[i].id === this.user.id) users[i] = this.user;
    }

    this.users = users;
  }

  getUser(userId: number): User {
    return this.users.find((u) => u.id === userId);
  }

  getMatches() {
    let matchIds = this.user.matches;
    let matches = this.matchService.matches;
    return matches.filter((m) => matchIds.includes(m.id));
  }

  get users(): User[] {
    return JSON.parse(localStorage.getItem('users')) as User[];
  }

  set users(users) {
    localStorage.setItem('users', JSON.stringify(users));
  }

  get user() {
    return JSON.parse(localStorage.getItem('user')) as User;
  }

  set user(user) {
    localStorage.setItem('user', JSON.stringify(user));
  }
}
