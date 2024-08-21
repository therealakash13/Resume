import { Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { InfoComponent } from './info/info.component';

export const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
  },
  {
    path: 'resume',
    component: InfoComponent,
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
];
