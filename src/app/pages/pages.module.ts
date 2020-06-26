import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// Routes
import { PAGES_ROUTES } from './pages.routes';

// Pipes
import { PipesModule } from '../pipes/pipes.module';

// Components
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
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
import { TextEditorsComponent } from './demos/text-editors/text-editors.component';
import { CalendarComponent } from './demos/calendar/calendar.component';
import { InvoiceComponent } from './demos/invoice/invoice.component';
import { ProfileComponent } from './demos/profile/profile.component';
import { EcommerceComponent } from './demos/ecommerce/ecommerce.component';
import { ProjectsComponent } from './demos/projects/projects.component';
import { ContactsComponent } from './demos/contacts/contacts.component';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    Dashboardv2Component,
    Dashboardv3Component,
    WidgetsComponent,
    GeneralComponent,
    IconsComponent,
    ButtonsComponent,
    SlidesComponent,
    ModalsComponent,
    NavsTabsComponent,
    TimelineComponent,
    RibbonComponent,
    FormsComponent,
    TextEditorsComponent,
    CalendarComponent,
    InvoiceComponent,
    ProfileComponent,
    EcommerceComponent,
    ProjectsComponent,
    ContactsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule,
    SharedModule,
    PAGES_ROUTES
  ]
})
export class PagesModule { }
