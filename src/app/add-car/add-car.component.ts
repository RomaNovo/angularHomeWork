import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})

export class AddCarComponent implements OnInit {

	carName:string = '';
	carYear:number = 2020;

	@Output('onAddCar')  addCar = new EventEmitter<{name:string,year:number}>();
	
	ngOnInit() {

	}

	addCars() {
		this.addCar.emit({
			name: this.carName,
			year: this.carYear
		});
		this.carName = '';
		this.carYear = 2020;
	} 

}
