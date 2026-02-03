import { Routes } from '@angular/router';
import { Layout1Component } from './shared/layouts/layout1/layout1.component';
import { HomeComponent } from './home/home.component';
import { SiteTemplateComponent } from './common/setups/site/components/template/template';
import { BootstrapSiteTemplateComponent } from './common/setups/site2/components/template/template';

export const routes: Routes = [
  // Home page
  {
    path: '',
    component: Layout1Component,
    children: [
      { path: '', component: HomeComponent }
    ]
  },

  // Technical Evaluation page
  {
    path: 'site',
    component: Layout1Component,
    children: [
      { path: '', component: SiteTemplateComponent },
      { path: 'site2', component: BootstrapSiteTemplateComponent },
    ]
  },

  // Optional: catch-all 404
  { path: '**', redirectTo: '' }
];
