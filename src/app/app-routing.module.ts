import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ContentComponent } from './content/content.component';
import { ServicesComponent } from './services/services.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { WorkshopComponent } from './workshop/workshop.component';

const routes: Routes = [
 {path:'what-we-do', component: WhatWeDoComponent},
 {path: 'services', component: ServicesComponent},
 {path: 'workshop', component: WorkshopComponent},
 {path: 'contact', component: ContactComponent},
 {path: '', component: ContentComponent}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
