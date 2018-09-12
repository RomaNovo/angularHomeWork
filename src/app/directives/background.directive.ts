import { Directive, ElementRef, Renderer2, HostListener, OnInit } from '@angular/core';

@Directive({
	selector: '[app-background]'
})

export class BackgroundDirective implements OnInit {

	constructor(public element: ElementRef, public  renderer: Renderer2) {}

	
	ngOnInit() {
		const { nativeElement } = this.element;
		this.renderer.setStyle(nativeElement, 'backgroundColor', 'darkred');
		this.renderer.addClass(nativeElement, 'white-text');
	}	


}