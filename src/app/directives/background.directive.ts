import { Directive, ElementRef, Renderer2, HostListener, OnInit } from '@angular/core';

@Directive({
	selector: '[app-background]'
})

export class BackgroundDirective implements OnInit {

	constructor(public element: ElementRef, public  renderer: Renderer2) {}

	
	ngOnInit() {
		this.renderer.setStyle(this.element.nativeElement, 'color', 'darkred');
		console.log(this.renderer);
	}	


}