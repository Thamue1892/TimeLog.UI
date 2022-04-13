import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditTimePage } from './edit-time.page';

const routes: Routes = [
  {
    path: '',
    component: EditTimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditTimePageRoutingModule {}
