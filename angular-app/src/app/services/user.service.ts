import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Router, CanActivate, ActivatedRoute } from '@angular/router';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService implements CanActivate {
  constructor(private router: Router, private route: ActivatedRoute) {
    User.InitDb();
  }

  canActivate(): boolean {
    if (!this.user) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
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
