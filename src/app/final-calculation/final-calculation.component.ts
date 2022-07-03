import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-final-calculation',
  templateUrl: './final-calculation.component.html',
  styleUrls: ['./final-calculation.component.scss']
})
export class FinalCalculationComponent implements OnInit {
  receivedmsg:any | undefined;
  constructor(private shared:SharedService) { }

  ngOnInit(): void {
    this.receivedmsg = this.shared.getmsg();
    console.log(this.receivedmsg);
    console.log("bbbb");
    
  }
  
  
  totalinvestment = 5000;
  totalinterest = 2000;
  totalreturn = 7000;
}
