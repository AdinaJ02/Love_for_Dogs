import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forgot-pass',
    loadChildren: () => import('./forgot-pass/forgot-pass.module').then( m => m.ForgotPassPageModule)
  },
  {
    path: 'accept-info-page1',
    loadChildren: () => import('./accept-info/accept-info-page1/accept-info-page1.module').then( m => m.AcceptInfoPage1PageModule)
  },
  {
    path: 'accept-info-page2',
    loadChildren: () => import('./accept-info/accept-info-page2/accept-info-page2.module').then( m => m.AcceptInfoPage2PageModule)
  },
  {
    path: 'home-page',
    loadChildren: () => import('./home-page/home-page.module').then( m => m.HomePagePageModule)
  },
  {
    path: 'meal-day',
    loadChildren: () => import('./meal-day/meal-day.module').then( m => m.MealDayPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./logout/logout.module').then( m => m.LogoutPageModule)
  }





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
