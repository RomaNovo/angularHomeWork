import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import {ChildCompComponent} from '../child-comp/child-comp.component';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],// :host ::ng-deep
  /*encapsulation: ViewEncapsulation.Native*/
})

export class CarsComponent {
	
	cars: Array<{name: string, year: number}> = [
		{
			name: 'Ford',
			year: 2015
		},
		{
			name: 'Mazda',
			year: 2010
		},
		{
			name: 'Audi',
			year: 2017	
		}
	];

	@ViewChild(ChildCompComponent) public childComp;


	upgrateCarList(car:{name:string,year:number}) {
		this.cars.push(car);
	}

	increment() {
		this.childComp.increment();
	}

	decrement() {this.childComp.decrement()};
}
