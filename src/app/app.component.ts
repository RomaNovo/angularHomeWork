import { Component, ElementRef, ViewChild} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from './user';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent  {

	userForm: FormGroup;

	user:User = new User('', '', '', 0);

	constructor(private formBuild: FormBuilder){}


	roles: string[] = ['Guest', 'Moderator', 'Administrator'];

	formErrors = {
		'name': '', 
		'age': '',
		'email': '',
		'role': ''
	}


	validationMessages = {
		'name': {
			'required': 'Обязательное поле.',
			'minlength': 'Значение должно быть не менее 4х символов.',
			'maxlength': 'Значение не должно быть больше 15 символов.'
		},
		'email': {
			'required': 'Обязательное поле.',
			'pattern': 'Не правильный формат'
		},
		'role': {
			'required': 'Обязательное поле.'
		},
		'age': {
			'required': 'Обязательное поле.',
			'pattern': 'Значение должно быть целым числом.'
		}
	}

	ngOnInit() {
			this.buildForm();
			this.onSubmit();
	}

	buildForm() {
		this.userForm = this.formBuild.group({
			'name': [this.user.name, [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
			'email': [this.user.email, [Validators.required, Validators.pattern("[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}")]],
			'role': [this.user.role, Validators.required],
			'age': [this.user.age, [Validators.required, Validators.pattern("\\d+")]]
		})

			this.userForm.valueChanges.subscribe(()=> this.onChangeValue());
	
			this.onChangeValue();
		
	}

	onChangeValue() {
			if(!this.userForm) return;
			let form = this.userForm;

			for( let field in this.formErrors) {
				this.formErrors[field] = '';

				let control = form.get(field);
				
				if(control && control.dirty && !control.valid) {

					let message = this.validationMessages[field];
					for( let error in control.errors) {
						this.formErrors[field] += message[error];
					}
				}
			}
	}

	onSubmit(f) {
		console.log(f)
		
	}
}

