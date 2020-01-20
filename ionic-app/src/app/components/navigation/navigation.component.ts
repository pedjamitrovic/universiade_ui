import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, public userService: UserService, private router: Router) {}

  locations() {
    this.router.navigate(['locations']);
  }

  matches() {
    this.router.navigate(['matches']);
  }

  attractions() {
    this.router.navigate(['attractions']);
  }

  changeRequests() {
    this.router.navigate(['change-requests']);
  }

  matchesWithoutVenue() {
    this.router.navigate(['matches-without-venue']);
  }

  reserveVenue() {
    this.router.navigate(['reserve-venue']);
  }

  profile() {
    this.router.navigate(['profile']);
  }

  logout() {
    this.userService.logout();
  }

}
