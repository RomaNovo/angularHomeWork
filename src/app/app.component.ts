import { Component, ElementRef, ViewChild, OnInit} from '@angular/core';
import { FormControl, FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { User } from './user';
import { emailValidator } from './email-validator.validator';







@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent  {

	constructor(private fb: FormBuilder){}

	emForm: FormGroup = this.fb.group({
		"email" :['', [Validators.required,  Validators.minLength(10), Validators.email]]
	})

	onSubmit(f){
		console.log(f);
	}

}

