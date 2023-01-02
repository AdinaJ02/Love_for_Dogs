import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcceptInfoPage2Page } from './accept-info-page2.page';

const routes: Routes = [
  {
    path: '',
    component: AcceptInfoPage2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcceptInfoPage2PageRoutingModule {}
