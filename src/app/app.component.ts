import { Component} from '@angular/core';
import { User } from './user/user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent  {
		
	roles: string[] = ['Guest', 'Moderator', 'Administrator'];

	model: User = new User(0, '', '', 0);


	get diagnostic() { return JSON.stringify(this.model)}

	formObj(obj){
		console.log(obj);
	}
}

