import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})

export class CarsComponent {
	
	carName: string = '';
	addCarStatus: Boolean = false;
	cars: Array<string> = ['BMW','Mazda','Hunday'];
	items: Array<object> = [
		{id: 1, name: 'item1'},
		{id: 2, name: 'item2'},
		{id: 3, name: 'item3'}	
	]

	addCar() {
		this.addCarStatus = !this.addCarStatus;
		this.cars.push(this.carName);
		this.carName = '';
	}

}
