import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformativeVideosPage } from './informative-videos.page';

const routes: Routes = [
  {
    path: '',
    component: InformativeVideosPage
  },
  {
    path: 'grooming',
    loadChildren: () => import('./grooming/grooming.module').then( m => m.GroomingPageModule)
  },
  {
    path: 'exercise',
    loadChildren: () => import('./exercise/exercise.module').then( m => m.ExercisePageModule)
  },
  {
    path: 'training',
    loadChildren: () => import('./training/training.module').then( m => m.TrainingPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformativeVideosPageRoutingModule {}
