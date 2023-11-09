import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FooterComponent } from './footer/footer.component';
import { LifeCycleMethodsComponent } from './life-cycle-methods/life-cycle-methods.component';
import { ServicesComponent } from './services/services.component';
import { MobileService } from './mobile.service';
import { HttpClientModule } from '@angular/common/http';
import { UdemyComponent } from './udemy/udemy.component';
import { AdminAccessComponent } from './admin-access/admin-access.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminAccessGuard } from './admin-access.guard';

RouterModule
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    NotfoundComponent,
    ParentComponent,
    ChildComponent,
    FooterComponent,
    LifeCycleMethodsComponent,
    ServicesComponent,
    UdemyComponent,
    AdminAccessComponent,
    AdminHomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [MobileService,AdminAccessGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
