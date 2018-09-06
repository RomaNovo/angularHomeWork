import { Component } from '@angular/core';

@Component({
  selector: '.app-car',
  templateUrl: './car.component.html',
  styles: [`h2 {color: red}`]
})

export class CarComponent  {

	name: string = 'BMW';
	year: number = 2018;
	
	getName():string {
		return this.name;
	}

	getYear():number {
		return this.year;
	}
}
