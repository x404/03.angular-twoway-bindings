import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.scss']
})
export class NgModelComponent {
  xValue: number = 0;
  yValue: number = 0;
  result: number | undefined;

  calculate(){
    this.result = +this.xValue + +this.yValue;
  }

  reset(){
    this.xValue = 0;
    this.yValue = 0;
    this.result = undefined
  }
}
