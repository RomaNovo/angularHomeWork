import { Component, ElementRef, ViewChild, OnInit} from '@angular/core';
import { FormControl, FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { User } from './user';
import { asyncEmailValidator } from './async-validator.validator';







@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent  {

	constructor(private fb: FormBuilder){}

	emForm: FormGroup = this.fb.group({
		"email" :['', [Validators.required], asyncEmailValidator]
	})

	onSubmit(f){
		console.log(f);
	}

}




