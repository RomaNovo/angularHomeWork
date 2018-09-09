import { Component, Input, ContentChild, ElementRef, OnInit, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  /*encapsulation: ViewEncapsulation.None	 
*/
})



export class CarComponent implements
 OnInit,
 OnChanges,
 DoCheck,
 AfterContentInit,
 AfterContentChecked,
 AfterViewInit,
 AfterViewChecked,
 OnDestroy
 {
	@ContentChild('carH') c;
	@Input('itemCar') car: {name:string,year:number};
	

	constructor() {
		console.log('constructor');

	}

	ngOnInit() {
		console.log('ngOnInit');
	}

	ngOnChanges(changes: SimpleChanges) {
		console.log('ngOnChanges', changes)
	}

	ngDoCheck () {
		console.log('ngDoCheck');
	}

	ngAfterContentInit() {
		console.log('ngAfterContentInit');
	}

	ngAfterContentChecked() {
		console.log('ngAfterContentChecked');
	}

	ngAfterViewInit() {
		console.log('ngAfterViewInit')
	}

	ngAfterViewChecked() {
		console.log('ngAfterViewChecked');
	}

	ngOnDestroy() {
		console.log('ngOnDestroy')
	}



}
	
	

