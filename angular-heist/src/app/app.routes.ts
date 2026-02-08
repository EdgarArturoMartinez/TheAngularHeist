/**
 * Application Routes Configuration
 * 
 * Defines all routes for the Angular application.
 * Uses lazy loading for feature modules to optimize bundle size.
 */
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./features/dashboard/components/dashboard/dashboard').then(m => m.Dashboard)
  },
  // Future routes will be added here
  // { path: 'about', loadComponent: ... }
  // { path: 'contact', loadComponent: ... }
];
