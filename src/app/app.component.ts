import { Component, ElementRef, ViewChild} from '@angular/core';
import { FormControl, FormArray, FormGroup, Validators } from '@angular/forms';
import { User } from './user';
import { AbstractControl } from '@angular/forms';
import { equalValidator, rangeValidator } from './custom-validator';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent  {

	obj = { 1 : '0', 2: '1', 3: '3'}
	min = Object.keys(this.obj);


	regForm: FormGroup = new FormGroup({
			'user' : new FormGroup({
				'firstName': new FormControl('', Validators.required),
				'lastName': new FormControl('', Validators.required)
			}),
			'emails': new FormArray([
				new FormControl('', [Validators.email, Validators.required])
			]),
			'pass': new FormGroup({
				'password': new FormControl('', [Validators.required, Validators.minLength(5), rangeValidator(22222,22222)]),
				'confirm': new FormControl('', Validators.required)
			}, equalValidator)
	})

	onSubmit(f){
		console.log('Submited!')
		console.log(f);
	}

	addEmail() {
		(<FormArray>this.regForm.controls['emails']).push(new FormControl('', [Validators.email, Validators.required]))
	}

	show(){
		console.log(this.min)
	}
}

