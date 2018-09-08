import { Component } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent {
	num:number= 10;

  increment() {this.num++;}
  	
  decrement() {this.num--;}
}
