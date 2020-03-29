import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
 {path: 'home', component: HomeComponent} ,
 {path: '', component: HomeComponent},
 {path: 'about', component: AboutComponent},
 {path: 'resume', component: ResumeComponent},
 {path: 'contact', component: ContactComponent},
 {path: ' ', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
