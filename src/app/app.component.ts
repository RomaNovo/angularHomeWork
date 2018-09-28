import { Component} from '@angular/core';
import { CarService } from './car.service';

interface Cars {
	'name': string,
	'color': string,
	id: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent  {

	carName: string = '';

	cars: Cars[] = [];
	
	constructor(private carService: CarService){
		this.getCar()
	}

	getCar() {
		this.carService.getCar()
		.subscribe( (cars: Cars[]) => this.cars = cars)
	}

	loadCar() {
		this.carService.addCar(this.carName)
		.subscribe( data => this.cars.push(data));
		this.carName = '';
	}
}




