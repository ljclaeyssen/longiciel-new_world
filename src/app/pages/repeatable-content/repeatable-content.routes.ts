import {Routes} from '@angular/router';

export const repeatableContentRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./repeatable-content.component').then(m => m.RepeatableContentComponent),
    children: [
      {
        path: 'daily',
        loadChildren: () =>
          import('./daily-content/daily-content.routes').then(m => m.dailyContentRoutes),
      },
      {
        path: 'weekly',
        loadChildren: () =>
          import('./weekly-content/weekly-content.routes').then(m => m.weeklyContentRoutes),
      },
    ]
  }
];
