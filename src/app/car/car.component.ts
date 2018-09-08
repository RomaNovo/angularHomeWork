import { Component, Input, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  /*encapsulation: ViewEncapsulation.None	 
*/
})



export class CarComponent  {
	@ContentChild('carH') c;

	@Input('itemCar') car: {name:string,year:number};

	ngAfterViewInit() {
		console.log(this.c)
	}


}
	
	

