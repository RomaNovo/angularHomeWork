import { Component, ElementRef, ViewChild} from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent  {

	constructor(private fb: FormBuilder){};

	loginForm: FormGroup;

	ngOnInit() {
			// FormBuilder - класс представляющий удобный интерфейс для создания экземпляров FormControl

			this.loginForm = this.fb.group({
				login: ['user1', Validators.required],
				password: ['', [Validators.required, Validators.minLength(5)]]
			});
	}

	onSubmit(form) {
		console.log(this.loginForm)
	}
	 
}

