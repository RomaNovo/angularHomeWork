import { Component,  Output, OnInit, Input,  } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent  {

	constructor(private carS: CarService) {}

  carName = '';

  addCar() {
   
    this.carS.addCar(this.carName);
    this.carName = '';
  }

}
