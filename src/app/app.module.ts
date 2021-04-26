import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FooterComponent } from './footer/footer.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { ContentComponent } from './content/content.component';
import { ServicesComponent } from './services/services.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { ContactComponent } from './contact/contact.component';
import { BoostrapContentModalComponent } from './boostrap-content-modal/boostrap-content-modal.component';
import {AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    WhatWeDoComponent,
    ContentComponent,
    ServicesComponent,
    WorkshopComponent,
    ContactComponent,
    BoostrapContentModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
    

  ],
  entryComponents: [BoostrapContentModalComponent],
  exports:[BoostrapContentModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
