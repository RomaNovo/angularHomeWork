import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { User } from './user/user.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements AfterViewInit {
		
	roles: string[] = ['Guest', 'Moderator', 'Administrator'];
	model: User = new User(0, '', '', 0);
	submitted: boolean = false;

// Обьек с ошибками, которые будут выведены в пользовательском интерфейсе
	formErrors = {
		'name': '',
		'age': ''	
	};

// Обьект с сообщениями ошибок
	validationMessages = {
		'name' : {
			'required':  'Обязательное поле',
			'minlength': 'Значение должно быть не менее 4х символов.'
		},
		'age': {
			'required': 'Обязательное поле'
		}
	}

	@ViewChild('userForm') userForm: NgForm;

	ngAfterViewInit() {
		this.userForm.valueChanges.subscribe(data => {
			this.onValueChanged();
			//data === name, age, role
		});

	}

	onValueChanged() {

		if(!this.userForm) return;
		let form = this.userForm.form;
		

		for(let field in this.formErrors) {
			this.formErrors[field] = '';
			// form.get - получение элемента управления input 1,2
			let control = form.get(field);
			console.log(control)
			
			if(control && control.dirty && !control.valid) {
				let message = this.validationMessages[field];
				for(let key in control.errors) {
					this.formErrors[field] += message[key] + '';
					console.log(message[key])
				}
			}
		}	
	}


	get diagnostic() { return JSON.stringify(this.model)}


	formObj(obj){
		
	}



}

