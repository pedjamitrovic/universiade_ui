import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    if (this.userService.user) {
      this.router.navigate(['home']);
    }
  }

  login() {
    this.userService.login('vlada_student', 'sifra123');
    if (!this.userService.user) {
      alert('No user');
    }
  }

}
