import { Component, OnInit } from '@angular/core';
import { CarService } from './car.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ CarService ]
})

export class AppComponent implements OnInit {

	constructor(private serviceCar: CarService) {}

	
	cars = [];

	ngOnInit() {
		this.cars = this.serviceCar.cars;
	}		
}

