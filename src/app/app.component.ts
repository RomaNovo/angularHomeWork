import { Component} from '@angular/core';
import { CarService } from './car.service';

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
		.subscribe( response => console.log(response))
	}
}




