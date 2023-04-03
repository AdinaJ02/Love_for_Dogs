import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformativeVideosPageRoutingModule } from './informative-videos-routing.module';

import { InformativeVideosPage } from './informative-videos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformativeVideosPageRoutingModule
  ],
  declarations: [InformativeVideosPage]
})
export class InformativeVideosPageModule {}
