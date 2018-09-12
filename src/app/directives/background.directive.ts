import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
	selector: '[app-background]'
})

export class BackgroundDirective {

	constructor(public element: ElementRef, public  renderer: Renderer2) {}

	@HostBinding('style.backgroundColor') background:string;


	@HostListener('mouseenter') onmouseenter() {
		this.background = 'red'
	}

	@HostListener('mouseleave') onmouseleave() {
		this.background = 'green'
	}


}