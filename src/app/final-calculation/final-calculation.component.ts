import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-final-calculation',
  templateUrl: './final-calculation.component.html',
  styleUrls: ['./final-calculation.component.scss']
})
export class FinalCalculationComponent implements OnInit {
  receivedmsg:any | undefined;
  receivedData: any;
  constructor(private shared:SharedService) { }

  ngOnInit(): void {
    //this.receivedmsg = this.shared.getmsg();
    this.shared.sipObjSubject.subscribe({
        next: (data) => {
          console.log(data);
        }
      });
  }
 
  
  
  totalinvestment = 5000;
  totalinterest = 2000;
  totalreturn = 0;
}
function roi(roi: any) {
  throw new Error('Function not implemented.');
}

