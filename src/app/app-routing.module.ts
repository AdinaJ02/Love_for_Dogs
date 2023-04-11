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
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  },
  {
    path: 'profile-page',
    loadChildren: () => import('./profile-page/profile-page.module').then( m => m.ProfilePagePageModule)
  },
  {
    path: 'informative-videos',
    loadChildren: () => import('./informative-videos/informative-videos.module').then( m => m.InformativeVideosPageModule)
  }, 
  {
    path: 'grooming',
    loadChildren: () => import('./informative-videos/grooming/grooming.module').then( m => m.GroomingPageModule)
  }, 
  {
    path: 'exercise',
    loadChildren: () => import('./informative-videos/exercise/exercise.module').then( m => m.ExercisePageModule)
  }, 
  {
    path: 'training',
    loadChildren: () => import('./informative-videos/training/training.module').then( m => m.TrainingPageModule)
  },   {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'breed-info',
    loadChildren: () => import('./breed-info/breed-info.module').then( m => m.BreedInfoPageModule)
  },
  {
    path: 'breed-info-page',
    loadChildren: () => import('./breed-info-page/breed-info-page.module').then( m => m.BreedInfoPagePageModule)
  },
  {
    path: 'music',
    loadChildren: () => import('./music/music.module').then( m => m.MusicPageModule)
  },
  {
    path: 'quiz1',
    loadChildren: () => import('./quiz/quiz1/quiz1.module').then( m => m.Quiz1PageModule)
  },
  {
    path: 'quiz2',
    loadChildren: () => import('./quiz/quiz2/quiz2.module').then( m => m.Quiz2PageModule)
  },
  {
    path: 'quiz3',
    loadChildren: () => import('./quiz/quiz3/quiz3.module').then( m => m.Quiz3PageModule)
  },
  {
    path: 'quiz-output',
    loadChildren: () => import('./quiz/quiz-output/quiz-output.module').then( m => m.QuizOutputPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
