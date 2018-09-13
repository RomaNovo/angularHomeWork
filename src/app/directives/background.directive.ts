import { Directive, Input, HostListener, HostBinding, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
	selector: '[appbackground]'
})

export class BackgroundDirective implements OnInit{
	@Input() hoverColor: string;
	@Input('appbackground') defaultColor: string;

	constructor(){}
	
	@HostBinding('style.color') color: string;

	@HostListener('mouseenter') 	mouseenter() {
		this.color = this.hoverColor;
	}
	@HostListener('mouseleave') 	mouseleave() {
		this.color = this.defaultColor;
	}

	ngOnInit() {
		this.color = this.defaultColor;
	}
}