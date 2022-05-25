import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CoursesComponent } from './courses/courses.component';
import { LoginComponent } from './login/login.component';
import { SerPageComponent } from './ser-page/ser-page.component';
import { SignupComponent } from './signup/signup.component';
import { TestroutComponent } from './testrout/testrout.component';

const routes: Routes = [
  {path:'Home',component: TestroutComponent},
  {path:'courses',component: CoursesComponent},
  {path:'services',component: SerPageComponent},
  {path:'About Us',component: AboutusComponent},
  {path:'Contact Us',component: ContactusComponent},
  {path:'signup',component: SignupComponent},
  {path:'login',component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
