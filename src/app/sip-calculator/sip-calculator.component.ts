import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'sip-calculator',
  templateUrl: './sip-calculator.component.html',
  styleUrls: ['./sip-calculator.component.scss']
})
export class SipCalculatorComponent implements OnInit {
  sipbgcolor: string | undefined;
  lumpsumbgcolor: string | undefined;

  constructor(private shared:SharedService) { }

  ngOnInit(): void {
  }
  public amount: any;
  public roi: any;
  public duration: any;
  i: any; n: any;public finalamount: any;
  siptype: any;
  show(): void {
    this.amount = this.amount;
    this.roi = this.roi;
    this.duration = this.duration;
  }
  changecatagory(a: any): void {
  
    this.siptype = a;
    if (a == 1) {
      this.sipbgcolor = "background-color: red; color: white;";
      this.lumpsumbgcolor = "";
    } else {
      this.lumpsumbgcolor = "background-color: red; color: white;";
      this.sipbgcolor = "";
    }
  }
  calculatesip() {
    if (this.siptype == 1) {
      
      // periodic rate of insterest monthly
      this.i = this.roi / 12 / 100;
      // number of payments you have made
      this.n = this.duration * 12;
      // for sip calculation to be return

      this.finalamount = Math.round(this.amount * ((((1 + this.i) ** this.n) - 1) / this.i) * (1 + this.i));
      console.log(this.finalamount);
    } else {
      
      // for lumsum calculation
      this.finalamount = Math.round(this.amount * ((1 + this.roi / 100) ** (this.duration)));
      console.log(this.finalamount);
    }
    this.shared.setmsg(this.finalamount);

  }
  
 
}

