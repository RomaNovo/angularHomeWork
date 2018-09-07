import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})

export class AddCarComponent  {

	carName:string = '';
	carYear:number = 2020;

	@Output('onAddCar')  addCar = new EventEmitter<{name:string,year:number}>();
	@ViewChild('carYear') carY: ElementRef;
	

	addCars(name: HTMLInputElement) {
		this.addCar.emit({
			name: name.value,
			year: Number(this.carY.nativeElement.value)
		})
		name.value = '';
		this.carY.nativeElement.value = 2020;
	}
	


}
