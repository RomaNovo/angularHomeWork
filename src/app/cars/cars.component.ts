import { Component, OnInit, Input} from '@angular/core';
import { ConsoleService } from '../console.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
  providers: [ ConsoleService ]
})
export class CarsComponent  {

  constructor(private service: ConsoleService) { }

  @Input() car;

  getClass() {
  	return {
  		'list-group-item-success': !this.car.isSold,
  		'list-group-item-danger': this.car.isSold,
  		'list-group-item': true
  	}
  }

  onAction(type: string) {
  	this.car.isSold = type === 'buy' ? true: false;
  	this.service.log(`${this.car.name} status = ${type}`);
  }

}
