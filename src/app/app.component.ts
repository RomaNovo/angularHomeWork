import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

	search:string = '';
	search1:string = '';
	
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

