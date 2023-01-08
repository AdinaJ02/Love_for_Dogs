import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { ForgotPassPageRoutingModule } from './forgot-pass-routing.module';

import { ForgotPassPage } from './forgot-pass.page';

// Importing Forms Module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ForgotPassPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ForgotPassPage]
})
export class ForgotPassPageModule {}
