import { Component, ElementRef, ViewChild} from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent  {
	
	@ViewChild('form')	 form: NgForm;
	onSubmit(form: NgForm) {
		console.log(form);
	}

	myCountry: string = 'ua'

	addRandomEmail(){
		const randomEmail= "roma.novomodnyi@gmail.com";
		/*this.form.setValue({
			user: {
				firstName: this.form.value.user.firstName,
				lastName: this.form.value.user.lastName
			},
			email: randomEmail,
			password: this.form.value.password,
			select: this.form.value.select
		})*/
		this.form.form.patchValue({
			email: randomEmail	
		})
		console.log(this.form.form)
	}
}

