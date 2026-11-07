import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'panel-admin',
    loadComponent: () => import('./panel-admin/panel-admin.page').then((m) => m.PanelAdminPage),
  },
  {
    path: 'login-admin',
    loadComponent: () => import('./login-admin/login-admin.page').then((m) => m.LoginAdminPage),
  },
];
