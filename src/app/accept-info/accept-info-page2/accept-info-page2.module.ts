import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcceptInfoPage2PageRoutingModule } from './accept-info-page2-routing.module';

import { AcceptInfoPage2Page } from './accept-info-page2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcceptInfoPage2PageRoutingModule
  ],
  declarations: [AcceptInfoPage2Page]
})
export class AcceptInfoPage2PageModule {}
