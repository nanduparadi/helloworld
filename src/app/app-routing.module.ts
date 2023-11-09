import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ServicesComponent } from './services/services.component';
import { UdemyComponent } from './udemy/udemy.component';
import { AdminAccessComponent } from './admin-access/admin-access.component';
import { AdminAccessGuard } from './admin-access.guard';


const routes: Routes = [
  { path: '', redirectTo: 'Contact', pathMatch: 'full' },
  {path: "admin",component: AdminAccessComponent,
    canActivate:[AdminAccessGuard]
  }
  ,
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'about', component: AboutComponent, title: 'About' },
  { path: "services", component: ServicesComponent, title: 'Services' },
  { path: "contact", component: ContactComponent, title: 'Contact' },
  { path: "form", component: UdemyComponent, title: 'form' },
  { path: 'faculty', loadChildren: () => import('./faculty/faculty.module').then(m => m.FacultyModule) },
  { path: "**", component: NotfoundComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




