import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BreedInfoPagePageRoutingModule } from './breed-info-page-routing.module';

import { BreedInfoPagePage } from './breed-info-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BreedInfoPagePageRoutingModule
  ],
  declarations: [BreedInfoPagePage]
})
export class BreedInfoPagePageModule {}
