import { Component, OnInit, Input } from '@angular/core';
import { ConsoleService } from '../console.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})

export class CarsComponent implements OnInit {

	@Input() car:{ name: string, isSold: Boolean };

  constructor(private consoleService: ConsoleService) { }

  ngOnInit() {
  }

  getClass() {
  	return {
  		'list-group-item-success': !this.car.isSold,
  		'list-group-item-danger': this.car.isSold,
  		'list-group-item': true
  	}
  }

  onAction(type:string) {
  	this.car.isSold = type === 'buy' ? true : false;
  	this.consoleService.log(`Статус машины ${this.car.name} : ${type}`);
  }
}
