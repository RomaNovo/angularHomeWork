import { ConsoleService } from './console.service';
import { Injectable } from '@angular/core';

@Injectable()

export class CarsService {

	constructor(private consoleService: ConsoleService){};

	public carList: { name: string, isSold: Boolean}[]= [
		{ name: 'Ford', isSold: false },
		{ name: 'Mercedes', isSold: false },
		{ name: 'Mazda', isSold: true },
	]

	public add(name:string){
		this.carList.push( { isSold: false, name } )
		this.consoleService.log(`Машина "${name}" добавлена`);		
	}

}