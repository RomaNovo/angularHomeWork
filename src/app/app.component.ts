import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	headerText = 'Создание своей директивы';

	items: number[] = [1,2,3,4,5];
	current: number = 1;

	onClick(num:number) {
		this.current = num;
	}
}
