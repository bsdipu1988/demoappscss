import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public message: any | undefined;
  sipObj: Object = {
    investedAmount: 0,
    roi: 0,
    tanure: 0,
    return: 0
  }
  public sipObjSubject = new BehaviorSubject(this.sipObj); // 0 is the initial value

  constructor() { }

  setmsg(data: object){
    this.sipObjSubject.next(data);
  }
  getmsg(){
    console.log("hi"+this.message);
    return this.message;
  }
 
  // subject.subscribe({
  //   next: (v) => console.log(`observerA: ${v}`),
  // });

}
