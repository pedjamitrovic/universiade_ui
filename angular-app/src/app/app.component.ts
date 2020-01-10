import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-app';

  constructor(private userService: UserService, private router: Router) {

  }

  home() {
    this.router.navigate(['home']);
  }

  locations() {
    this.router.navigate(['locations']);
  }

  matches() {
    this.router.navigate(['matches']);
  }

  attractions() {
    this.router.navigate(['attractions']);
  }

  profile() {
    this.router.navigate(['profile']);
  }

  logout() {
    this.userService.logout();
  }
}
