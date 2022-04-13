import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./template/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./template/registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./template/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'edit-time',
    loadChildren: () => import('./template/edit-time/edit-time.module').then( m => m.EditTimePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
