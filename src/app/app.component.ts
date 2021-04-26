import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lt-cohor';


  constructor( private store: AngularFirestore  ) {}






}
