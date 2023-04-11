import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BreedInfoPage } from './breed-info.page';

const routes: Routes = [
  {
    path: '',
    component: BreedInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BreedInfoPageRoutingModule {}
