import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public message: any | undefined;
  constructor() { }

  setmsg(data: string | undefined){
    this.message = data;
    console.log("hiiiii"+this.message);
  }
  getmsg(){
    console.log("hi"+this.message);
    return this.message;
    
    
  }
}
