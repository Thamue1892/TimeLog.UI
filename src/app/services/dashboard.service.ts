import { Injectable } from '@angular/core';
import {Project} from "../_model/project";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }

  getUserProjects() {
     return this.http.get<Project[]>('http://localhost:29336/Dashboard/UserProjects');
  }
}
