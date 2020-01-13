import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.profileForm = new FormGroup({
      firstName: new FormControl(this.userService.user.firstName, [Validators.required]),
      lastName: new FormControl(this.userService.user.lastName, [Validators.required]),
      phoneNumber: new FormControl(this.userService.user.phoneNumber, [Validators.required]),
      homeAddress: new FormControl(this.userService.user.homeAddress, [Validators.required]),
      username: new FormControl(this.userService.user.username, [Validators.required]),
      password: new FormControl(this.userService.user.password, [Validators.required]),
    });
  }

}
