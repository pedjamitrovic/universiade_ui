import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { User, UserType } from '../model/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService) {
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const roles = route.data.expectedRoles as UserType[];
    if (!roles.includes(this.userService.user.type)) {
      this.router.navigate(['error-404']);
      return false;
    }
    return true;
  }
}
