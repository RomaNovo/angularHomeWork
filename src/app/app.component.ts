import { Component, ElementRef, ViewChild, OnInit} from '@angular/core';
import { FormControl, FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { User } from './user';
import { asyncEmailValidator } from './async-validator.validator';
import { BlackListService } from './blacklist.service';
import { blackListValidator } from './blacklist.validator'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent  {

	constructor(private blackService: BlackListService){}

	emForm: FormGroup = new FormGroup({
		"email" : new FormControl('',   [ Validators.required, Validators.email ],  blackListValidator(this.blackService)     )
	})

	onSubmit(f){
		console.log(f);
	}

}




