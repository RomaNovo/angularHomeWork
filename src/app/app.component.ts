import { Component} from '@angular/core';
import { CarService } from './car.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent  {

	cars = [];
	
	constructor(private carService: CarService){}

	getCar() {
		this.carService.getCar()
		.subscribe( (response: Response) => {
			 this.cars = response.json();
				
		})
	}
}




