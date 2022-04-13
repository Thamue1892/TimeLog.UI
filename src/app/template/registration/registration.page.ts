import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  fullName: string;
  roleId: string;
  email: string;
  address: string;

  private regData: FormGroup;

  constructor(private authService: AuthenticationService) {
  }

  ngOnInit() {

    this.regData = new FormGroup({
      fullName: new FormControl(),
      email: new FormControl(),
      roleId: new FormControl(),
      address: new FormControl(),
    });
  }

  register() {

    this.authService.registration(this.regData.controls['fullName'].value, this.regData.controls["email"].value,
      this.regData.controls['address'].value, this.regData.controls["roleId"].value);
  }
}
