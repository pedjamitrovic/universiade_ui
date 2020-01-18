import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserType } from 'src/app/model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    if (this.userService.user.type === UserType.Student) {
      this.router.navigate(['locations']);
    } else if (this.userService.user.type === UserType.Admin) {
      this.router.navigate(['change-requests']);
    }
  }

}
