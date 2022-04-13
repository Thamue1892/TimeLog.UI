import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditTimePageRoutingModule } from './edit-time-routing.module';

import { EditTimePage } from './edit-time.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditTimePageRoutingModule
  ],
  declarations: [EditTimePage]
})
export class EditTimePageModule {}
