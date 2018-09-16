import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
	carName = '';

	@Output() onCarAdd = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  addCar() {
  	if(this.carName) {
  		this.onCarAdd.emit(this.carName)
  		this.carName = '';
  	}	
  }
}
