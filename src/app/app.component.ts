import { Component, OnInit} from '@angular/core';
import { CarsService } from './cars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ CarsService ]
})

export class AppComponent  {
	
	public carList: { name: string, isSold: Boolean }[];

	constructor(private carcService: CarsService) {}

	ngOnInit() {
		this.carList = this.carcService.carList;
	}	
	
	public addCarToList(name:string){
		this.carcService.add( name );		
	}
}

