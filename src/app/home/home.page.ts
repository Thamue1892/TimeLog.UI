import { Component } from '@angular/core';
 import {Project} from '../_model/project';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
   projects: Project[] = [];

  constructor() {}
  //
   // ngOnInit(): void {
   //   this.homeService.getUserProjects();
   //    // .subscribe(data => this.projects = data);
   //  }
}
