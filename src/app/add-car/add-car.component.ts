import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

	@Output() onAddCar = new EventEmitter<string>();

	public input: string = '';

  constructor() { }

  ngOnInit() {
  }

  public addCar() {
  	if( this.input ) {
  		this.onAddCar.emit(this.input);
  		this.input = '';
  	}
  	
  }

}
