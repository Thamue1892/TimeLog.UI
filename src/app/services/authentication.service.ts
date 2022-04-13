import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Login} from '../_model/Login';
import {Router} from "@angular/router";

export const AUTHENTICATED_USER = 'User';
export const API_BASE_URL = 'https://localhost:29336/Account/Login';

const option = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

@Injectable({
  providedIn: 'root'
})


export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<Login>;
  private currentUser: Observable<Login>;

  constructor(private httpClient: HttpClient, private router: Router) {
   // this.currentUserSubject = new BehaviorSubject<Login>(JSON.parse(localStorage.getItem(AUTHENTICATED_USER)));
    // this.currentUser = this.currentUserSubject.asObservable();
  }

  // authSubject = new BehaviorSubject(false);

  login(email, password) {
     return this.httpClient.post("http://localhost:29336/Account/Login",{email,password}).subscribe(
     resp => {
           const token = (<any>resp).token;
          localStorage.setItem(AUTHENTICATED_USER ,token);
           this.router.navigate(["dashboard"]);
     });
  }


  registration(fullName, email, address, roleId) {
     return this.httpClient.post("http://localhost:29336/Account/Register",{fullName,email,address,roleId}).subscribe(
     resp => {
           const token = (<any>resp).token;
           this.router.navigate(["login"]);
     });
  }
}
