import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';
import { AboutmeComponent } from './aboutme/aboutme.component';

const routes: Routes = [
  {
    path: '',
    component: AboutmeComponent
  },
  {
    path: 'experience',
    component: ExperienceComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
