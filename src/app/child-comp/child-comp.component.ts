import { Component, ViewChild, ElementRef,ContentChild } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent {
	@ContentChild('header') header: ElementRef;
	@ViewChild('name') name;
	n = 'aaa'

	change() {
		console.log(this.header)
	}
	constructor() {
		this.n = "heelo"
		console.log(this.n)
	}
}
