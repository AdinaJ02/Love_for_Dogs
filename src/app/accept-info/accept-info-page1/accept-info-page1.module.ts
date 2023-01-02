import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcceptInfoPage1PageRoutingModule } from './accept-info-page1-routing.module';

import { AcceptInfoPage1Page } from './accept-info-page1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcceptInfoPage1PageRoutingModule
  ],
  declarations: [AcceptInfoPage1Page]
})
export class AcceptInfoPage1PageModule {}
