import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Subject } from 'rxjs/internal/Subject';

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
  // public sipObjNormalSubject = new Subject(); 
  public sipObjSubject = new BehaviorSubject(this.sipObj); // 0 is the initial value

  constructor() { }

  setmsg(data: any){
    this.sipObjSubject.next(data);
  }

}
