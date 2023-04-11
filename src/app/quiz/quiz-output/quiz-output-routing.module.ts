import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizOutputPage } from './quiz-output.page';

const routes: Routes = [
  {
    path: '',
    component: QuizOutputPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizOutputPageRoutingModule {}
