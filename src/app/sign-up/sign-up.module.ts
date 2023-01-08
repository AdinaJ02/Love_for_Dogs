import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { SignUpPageRoutingModule } from './sign-up-routing.module';

import { SignUpPage } from './sign-up.page';

// Importing Forms Module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SignUpPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [SignUpPage]
})
export class SignUpPageModule { }
