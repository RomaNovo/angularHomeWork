import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})

export class CarsComponent {
	
	carName: string = '';
	addCarStatus: Boolean = false;

	addCar() {
		this.addCarStatus = !this.addCarStatus;
	}

}
