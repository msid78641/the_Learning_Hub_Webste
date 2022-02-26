import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { PreloaderComponent } from './shared/preloader/preloader.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ClassesComponent } from './pages/services/classes/classes.component';
import { TeachersComponent } from './pages/services/teachers/teachers.component';
import { EventsComponent } from './pages/events/events.component';
import { StudentsComponent } from './pages/services/students/students.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { FaqComponent } from './pages/faq/faq.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { LoaderComponent } from './shared/loader/loader.component';
import { OnRefreshModalComponent } from './shared/on-refresh-modal/on-refresh-modal.component';
import { PoliciesComponent } from './pages/policies/policies.component';
import { PrivacyPolicyComponent } from './pages/policies/privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './pages/policies/terms-and-conditions/terms-and-conditions.component';
import { RefundAndCancellationComponent } from './pages/policies/refund-and-cancellation/refund-and-cancellation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    PreloaderComponent,
    ContactUsComponent,
    ClassesComponent,
    TeachersComponent,
    EventsComponent,
    StudentsComponent,
    NotfoundComponent,
    FaqComponent,
    LoaderComponent,
    OnRefreshModalComponent,
    PoliciesComponent,
    PrivacyPolicyComponent,
    TermsAndConditionsComponent,
    RefundAndCancellationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CarouselModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
