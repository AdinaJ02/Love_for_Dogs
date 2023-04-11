import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BreedInfoPagePage } from './breed-info-page.page';

const routes: Routes = [
  {
    path: '',
    component: BreedInfoPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BreedInfoPagePageRoutingModule {}
