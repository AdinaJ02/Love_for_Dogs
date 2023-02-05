import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { AcceptInfoPage1PageRoutingModule } from './accept-info-page1-routing.module';

import { AcceptInfoPage1Page } from './accept-info-page1.page';

// Importing Forms Module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcceptInfoPage1PageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AcceptInfoPage1Page]
})
export class AcceptInfoPage1PageModule {}
