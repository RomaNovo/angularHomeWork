import { Component,Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})

export class AddCarComponent  {
	carName:string = '';
	carYear:number = 2020;
	@Input() title:string;

	@ViewChild('carYear') year: ElementRef;
	@Output('onAddCar') carEmitter = new EventEmitter<{name:string,year:number}>();

	addCar(name) {
		this.carEmitter.emit({
			name: name.value,
			year: this.year.nativeElement.value
		});

		name.value = '';
		this.year.nativeElement.value = 2020;
	}

}
