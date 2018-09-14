import { Component } from '@angular/core';
import  'rxjs/Rx' ;

import { Observable, of } from "rxjs";




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
/*	title = '';*/
	search:string = '';
	search1:string = '';
	asyncTitle = Observable.of('This is Async Title')
	.delay(3000)
	/*.subscribe((str)=> this.title = str)*/


	
	cars = [
		{ name: 'Ford', descr :'asd 1' }, 
		{ name: 'Mazda', descr :'gjg 2' },
		{ name: 'Mercedes', descr :'45h 3' },
		{ name: 'Tavria', descr :'gfhfg 4' },
		{ name: 'Lada', descr :'krgf 5' },
		{ name: 'Tavria', descr :'gfhfg 4' },
		{ name: 'Nissan', descr :'hsd' },
	] 

	addCar() {
		this.cars.push({
			name: 'New Name',
			descr: 'New Descr'
		})
	}


}

