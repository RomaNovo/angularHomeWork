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
	dates = [
	 new Date(2015, 3, 4).toString(),
	 new Date(2011,2,5).toString(),
	 new Date(2999,1,1).toString(),
	 new Date(2000,1,7).toString()
	]
	

	addCar() {
		this.addCarStatus = !this.addCarStatus;
		this.cars.push(this.carName);
		this.carName = '';
	}


}
