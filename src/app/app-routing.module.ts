import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ServicesComponent } from './services/services.component';
import { UdemyComponent } from './udemy/udemy.component';


const routes:Routes =[
  {path:'', redirectTo:'Contact', pathMatch:'full'},
  {path : 'Home', component: HomeComponent,title:'Home'},
  {path : 'About', component: AboutComponent,title:'About'},
  {path : "Services", component: ServicesComponent,title:'Services'}, 
  {path : "Contact", component: ContactComponent,title:'Contact'}, 
  {path : "Form",component:UdemyComponent,title:'form'},
  {path : "**" , component:NotfoundComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }




