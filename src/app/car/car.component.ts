import { Component, Input } from '@angular/core';

@Component({
  selector: '.app-car',
  templateUrl: './car.component.html',
  styles: [`h2 {color: red}`]
})

export class CarComponent  {


	@Input('carItem') car: {name: string, year: number};

	private carItem;
	
}
