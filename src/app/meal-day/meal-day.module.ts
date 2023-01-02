import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MealDayPageRoutingModule } from './meal-day-routing.module';

import { MealDayPage } from './meal-day.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MealDayPageRoutingModule
  ],
  declarations: [MealDayPage]
})
export class MealDayPageModule {}
