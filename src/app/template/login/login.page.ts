import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 email!: string;
 password: string;


 private formData: FormGroup;
  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {

    this.formData = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }
 onSubmit() {
      this.authService.login(this.formData.controls['email'].value, this.formData.controls["password"].value);
  }
}
