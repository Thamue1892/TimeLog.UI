import { Component, OnInit } from '@angular/core';
import {Project} from '../../_model/project';
import {DashboardService} from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  projects: Project[]  = [];
  constructor(private dashService: DashboardService) { }

  ngOnInit() {
    this.dashService.getUserProjects().subscribe(data => this.projects = data);
  }

}
