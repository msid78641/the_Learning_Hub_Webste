import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ClassesComponent } from './pages/services/classes/classes.component';
import { TeachersComponent } from './pages/services/teachers/teachers.component';
import { EventsComponent } from './pages/events/events.component';
import { StudentsComponent } from './pages/services/students/students.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { FaqComponent } from './pages/faq/faq.component';
import { PrivacyPolicyComponent } from './pages/policies/privacy-policy/privacy-policy.component';
import { RefundAndCancellationComponent } from './pages/policies/refund-and-cancellation/refund-and-cancellation.component';
import { TermsAndConditionsComponent } from './pages/policies/terms-and-conditions/terms-and-conditions.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
        pathMatch: 'full',
      },
      {
        path: 'about-us',
        component: AboutUsComponent,
        pathMatch: 'full',
      },
      {
        path: 'contact-us',
        component: ContactUsComponent,
        pathMatch: 'full',
      },
      {
        path: 'events',
        component: EventsComponent,
        pathMatch: 'full',
      },
      {
        path: 'faq',
        component: FaqComponent,
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'services',
    pathMatch: 'prefix',
    children: [
      {
        path: '',
        redirectTo: '/courses',
        pathMatch: 'full',
      },
      {
        path: 'courses',
        component: ClassesComponent,
        pathMatch: 'full',
      },
      {
        path: 'teachers',
        component: TeachersComponent,
        pathMatch: 'full',
      },
      {
        path: 'students',
        component: StudentsComponent,
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'policies',
    pathMatch: 'prefix',
    children: [
      {
        path: '',
        redirectTo: '/privacy-policy',
        pathMatch: 'full',
      },
      {
        path: 'privacy-policy',
        component: PrivacyPolicyComponent,
        pathMatch: 'full',
      },
      {
        path: 'refund-and-cancellation',
        component: RefundAndCancellationComponent,
        pathMatch: 'full',
      },
      {
        path: 'terms-and-conditions',
        component: TermsAndConditionsComponent,
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
