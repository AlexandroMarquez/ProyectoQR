import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: ':num/menu-uno',
    loadChildren: () => import('./pages/menu-uno/menu-uno.module').then( m => m.MenuUnoPageModule)
  },
  {
    path: 'menu-dos',
    loadChildren: () => import('./pages/menu-dos/menu-dos.module').then( m => m.MenuDosPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./pages/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },

  {
      path: 'set-password', 
      loadChildren: () => import('./pages/set-password/set-password.module').then( m => m.SetPasswordPageModule)
  },
  {
    path: 'set-password',
    loadChildren: () => import('./pages/set-password/set-password.module').then( m => m.SetPasswordPageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
