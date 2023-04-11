import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BreedInfoPageRoutingModule } from './breed-info-routing.module';

import { BreedInfoPage } from './breed-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BreedInfoPageRoutingModule
  ],
  declarations: [BreedInfoPage]
})
export class BreedInfoPageModule {}
