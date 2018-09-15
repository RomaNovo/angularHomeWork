import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
	selector : '[appBackground]'
})

export class BackgroundDirective {
	@Input('appBackground') hoverColor;
	@Input() defaultColor;

	@HostListener('mouseenter')  mouseenter(){ 
		this.color = this.hoverColor;
		this.bgColor = 'yellow'

	}

	@HostListener('mouseleave')  mouseleave(){ 
		this.color = this.defaultColor;
		this.bgColor = 'orange';
	}

	/*@Input() defaultColor;*/

	@HostBinding('style.color')  color;
	@HostBinding('style.backgroundColor')  bgColor;
	

	constructor(public element: ElementRef) {}
		
		

	ngOnInit() {}

	
}