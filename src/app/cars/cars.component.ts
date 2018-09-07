import { Component, OnInit, ViewEncapsulation } from '@angular/core';

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

	upgrateCarList(car:{name:string,year:number}) {
		this.cars.push(car);
	}
}
