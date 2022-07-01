import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
//ngOnInit()
export class AppComponent implements OnInit, OnDestroy {

  constructor(){
    console.log('constructor Called');
  }
  ngOnDestroy(): void {
    console.log('Des Called');
  }
  ngOnInit(): void {
    console.log('oninit Called');
  }
  
  title = 'appscss';
}
