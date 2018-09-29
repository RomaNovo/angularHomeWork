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
	colors: string[] = [
		'red',
		'green',
		'blue',
		'orange',
		'pink'
	]
	
	constructor(private carService: CarService){
		/*this.getCar()*/
	}

	getColor() {
		return this.colors[Math.floor(Math.random()* (this.colors.length -1)) ];
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

	addColor(car: Cars){
		car.color = this.getColor();
		this.carService.changeColor(car)
	}

	removeCar(id: number) {
		this.carService.delCar(id)
			.subscribe(data => {
				this.cars = this.cars.filter( car => car.id != id);
			})
	}
}




