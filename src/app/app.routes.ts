import { Routes } from '@angular/router';

export const routes: Routes = [
  // Default redirect to advisor
  { path: '', redirectTo: 'advisor', pathMatch: 'full' },

  // Advisor layout
  {
    path: 'advisor',
    loadChildren: () =>
      import('./advisor-layout/advisor-layout.module').then(m => m.AdvisorLayoutModule),
  },

  // Admin layout
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin-layout/admin-layout.module').then(m => m.AdminLayoutModule),
  },

  // Wildcard fallback
  { path: '**', redirectTo: 'advisor' },
];
