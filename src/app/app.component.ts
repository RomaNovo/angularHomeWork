import { Component, OnInit} from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from './email-validator.validator';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit  {
	
	constructor() {}

	form: FormGroup;


	ngOnInit(){
		this.formBuild()
	}

	formBuild() {
		this.form = new FormGroup({
			'name': new FormControl(null, Validators.required),
			'email': new FormControl(null, [Validators.required, emailValidator])
		})

		this.form.statusChanges.subscribe(status => console.log(status))
	}

	onSubmit() {
		console.log(this.form);
		this.form.reset()
	}
}




