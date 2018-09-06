import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})

export class CarsComponent {
	
	carName = '';
	carYear = 2020;

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
	
	constructo() {

	}
	addCar() {
		this.cars.push({
			name: this.carName,
			year: this.carYear
		});
		this.carName = '';
		this.carYear = 2018;
	}


}
