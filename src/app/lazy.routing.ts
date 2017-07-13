import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LazyPageComponent } from './lazy-page/lazy-page.component';

const routes: Routes = [
  { path: '', component: LazyPageComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);