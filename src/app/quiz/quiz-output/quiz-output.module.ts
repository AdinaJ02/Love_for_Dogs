import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizOutputPageRoutingModule } from './quiz-output-routing.module';

import { QuizOutputPage } from './quiz-output.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizOutputPageRoutingModule
  ],
  declarations: [QuizOutputPage]
})
export class QuizOutputPageModule {}
