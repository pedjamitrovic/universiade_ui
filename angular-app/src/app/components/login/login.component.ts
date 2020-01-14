import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string = 'Wrong credentials.';
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    if (this.userService.user) {
      this.router.navigate(['home']);
    }
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onFieldFocus() {
    this.errorMessage = '';
  }

  login() {
    this.userService.login('pedja_admin', 'sifra123');
    if (!this.userService.user) {
      alert('No user');
    }
  }

}
