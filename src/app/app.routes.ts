import { Routes } from '@angular/router';

import { AboutComponent, AboutHomeComponent, AboutItemComponent } from 'app/pages/about.component';
import { HomeComponent } from 'app/pages/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'about',
    component: AboutComponent,
    children: [
      { path: '', component: AboutHomeComponent }, // url: about/
      { path: 'item/:id', component: AboutItemComponent }
    ]
  },
  {
    path: 'about2',
    component: AboutComponent,
    children: [
      { path: '', component: AboutHomeComponent }, // url: about/
      { path: 'item/:id', component: AboutItemComponent }
    ]
  },
  {
    path: 'about3',
    component: AboutComponent,
    children: [
      { path: '', component: AboutHomeComponent }, // url: about/
      { path: 'item/:id', component: AboutItemComponent }
    ]
  }
];
