import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

// Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { Dashboardv2Component } from './dashboardv2/dashboardv2.component';
import { Dashboardv3Component } from './dashboardv3/dashboardv3.component';
import { WidgetsComponent } from './demos/widgets/widgets.component';
import { GeneralComponent } from './demos/ui-emelents/general/general.component';
import { IconsComponent } from './demos/ui-emelents/icons/icons.component';
import { ButtonsComponent } from './demos/ui-emelents/buttons/buttons.component';
import { SlidesComponent } from './demos/ui-emelents/slides/slides.component';
import { ModalsComponent } from './demos/ui-emelents/modals/modals.component';
import { NavsTabsComponent } from './demos/ui-emelents/navs-tabs/navs-tabs.component';
import { TimelineComponent } from './demos/ui-emelents/timeline/timeline.component';
import { RibbonComponent } from './demos/ui-emelents/ribbon/ribbon.component';
import { FormsComponent } from './demos/forms/forms.component';
import { CalendarComponent } from './demos/calendar/calendar.component';
import { InvoiceComponent } from './demos/invoice/invoice.component';
import { ProfileComponent } from './demos/profile/profile.component';
import { EcommerceComponent } from './demos/ecommerce/ecommerce.component';
import { ContactsComponent } from './demos/contacts/contacts.component';
import { ProjectsComponent } from './demos/projects/projects.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'dashboardv2',
        component: Dashboardv2Component
      },
      {
        path: 'dashboardv3',
        component: Dashboardv3Component
      },
      {
        path: 'widgets',
        component: WidgetsComponent
      },
      {
        path: 'general',
        component: GeneralComponent
      },
      {
        path: 'icons',
        component: IconsComponent
      },
      {
        path: 'buttons',
        component: ButtonsComponent
      },
      {
        path: 'sliders',
        component: SlidesComponent
      },
      {
        path: 'modals_alerts',
        component: ModalsComponent
      },
      {
        path: 'navbar_tabs',
        component: NavsTabsComponent
      },
      {
        path: 'timeline',
        component: TimelineComponent
      },
      {
        path: 'ribbons',
        component: RibbonComponent
      },
      {
        path: 'forms',
        component: FormsComponent
      },
      {
        path: 'calendar',
        component: CalendarComponent
      },
      {
        path: 'invoice',
        component: InvoiceComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'ecommerce',
        component: EcommerceComponent
      },
      {
        path: 'projects',
        component: ProjectsComponent
      },
      {
        path: 'contacts',
        component: ContactsComponent
      }
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
