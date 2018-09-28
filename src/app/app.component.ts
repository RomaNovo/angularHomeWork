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

	cars: Cars[] = [];
	
	constructor(private carService: CarService){}

	getCar() {
		this.carService.getCar()
		.subscribe( (cars: Cars[]) => this.cars = cars)
	}
}




