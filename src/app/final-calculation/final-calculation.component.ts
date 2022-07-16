import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-final-calculation',
  templateUrl: './final-calculation.component.html',
  styleUrls: ['./final-calculation.component.scss'],
})
export class FinalCalculationComponent implements OnInit {
  data: any;
  constructor(private shared: SharedService) {
    this.shared.sipObjSubject.subscribe((data) => {
      this.data = data;
    });
  }

  ngOnInit(): void {}
}
