import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
    title: 'Home',
  },
  {
    path: 'skills/:slug',
    loadComponent: () => import('./pages/skill-detail/skill-detail').then((m) => m.SkillDetail),
    title: 'Skill',
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound),
    title: 'Not Found',
  },
];
