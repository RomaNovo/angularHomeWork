import { Component, EventEmitter, Output, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  {

	@Output() onCarAdd = new EventEmitter<String>();
  carName = '';

  addCar() {
    this.onCarAdd.emit(this.carName);
    this.carName  = '';
  }



}
