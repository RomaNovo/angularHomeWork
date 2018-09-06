import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})

export class CarsComponent {
	
	carName: string = '';
	addCarStatus: Boolean = false;
	cars: Array<string> = ['BMW','Mazda','Hunday','Audi','Bentli'];
	

	addCar() {
		this.addCarStatus = !this.addCarStatus;
		this.cars.push(this.carName);
		this.carName = '';
	}

	setBigCarText(car) {
		return	(car.length > 4)?  true :  false;
	}

}
