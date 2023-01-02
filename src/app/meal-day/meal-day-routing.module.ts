import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MealDayPage } from './meal-day.page';

const routes: Routes = [
  {
    path: '',
    component: MealDayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MealDayPageRoutingModule {}
