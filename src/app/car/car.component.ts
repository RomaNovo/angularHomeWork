import { Component,Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  /*encapsulation: ViewEncapsulation.None	 
*/
  
})

export class CarComponent  {

	@Input('itemCar') car:{name:string,year:number};
}
	
	

