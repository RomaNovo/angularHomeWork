import { Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent  {
	@ViewChild('form') form:HTMLFormElement;

	public list: Array<{ type: string, text: string }> = [{
		type: 'yes',
		text: 'Да'
	}, {
		type: 'no',
		text: 'Нет'
	}]

	public defaultAnswer: string = 'no';
	public defaultCountry: string = 'ua';

	submitForm(form:HTMLFormElement) {
		console.log('submited!', this.form)
	}
}

