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
  errorMessage: string;
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
    if (this.loginForm.invalid) { return; }
    this.userService.login(this.loginForm.controls.username.value, this.loginForm.controls.password.value);
    if (!this.userService.user) {
      this.errorMessage = 'Wrong credentials.';
    }
  }

}
