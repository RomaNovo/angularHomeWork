import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent  {

  constructor() { }

  @Input() car;

  getClass() {
  	return {
  		'list-group-item-success': !this.car.isSold,
  		'list-group-item-danger': this.car.isSold,
  		'list-group-item': true
  	}
  }

  onAction(type: string) {
  	this.car.IsSold = type === 'buy' ? true: false;
  }


 

}
