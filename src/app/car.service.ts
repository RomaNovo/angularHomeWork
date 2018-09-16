import { ConsoleService } from './console.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CarService {

	constructor(private consServ: ConsoleService) {}

	 cars=[{
			name: 'Ford',
			isSold: false
		},
		{
			name: 'Mazda',
			isSold: false
		},
		{
			name: 'Audi',
			isSold: true
		}]

		carAdd(name:string) {
			this.cars.push({
				isSold: false,
				name
			})
			this.consServ.log(`Машина ${name} была добавлена`);
		}
}