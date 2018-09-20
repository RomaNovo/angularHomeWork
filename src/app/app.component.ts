import { Component, ElementRef, ViewChild} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent  {

	// FormGroup - группа отдельных элементов управления => FormControl
	//FormControl - класс, который представляет элемент управления

	loginForm: FormGroup;


	ngOnInit() {
		this.loginForm = new FormGroup({
			login: new FormControl('user1', Validators.required),
			password: new FormControl('', [Validators.required, Validators.minLength(7)])
		})
	}

	onSubmit(form) {
		console.log(this.loginForm)
	}
	 
}

