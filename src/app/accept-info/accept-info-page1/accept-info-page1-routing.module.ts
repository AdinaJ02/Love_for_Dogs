import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcceptInfoPage1Page } from './accept-info-page1.page';

const routes: Routes = [
  {
    path: '',
    component: AcceptInfoPage1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcceptInfoPage1PageRoutingModule {}
