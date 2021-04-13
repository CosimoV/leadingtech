import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {BoostrapContentModalComponent} from '../boostrap-content-modal/boostrap-content-modal.component';
import { BoostrapContentModalComponent2 } from '../boostrap-content-modal/boostrap-content-modal.component2';

@Component({
  selector: 'app-workshop', 
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.css']

  
})
export class WorkshopComponent implements OnInit {

  constructor(private ngbModalRef: NgbModal){


  }
    //boostrap modal
  
    showBoostrapModal(){
      const opts = {
        windowClass: 'myCustomClass',
        size:'lg'
  
  
      };
  
      this.ngbModalRef.open(BoostrapContentModalComponent, opts);
  
  
  
    }

    showBoostrapModal2(){
      const opts = {
        windowClass: 'myCustomClass',
        size:'lg'

      }


      this.ngbModalRef.open(BoostrapContentModalComponent2, opts);
    }

  ngOnInit(): void {
  }



}
