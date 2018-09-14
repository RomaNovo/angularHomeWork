import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name : 'carFilter'
})

export class CarFilterPipe implements PipeTransform {
	

	transform(carList, search:string, carField:string) {
		if(carList.length === 0 || search.length === 0 ) {
			return carList;
		}

		return carList.filter( (car)=> car[carField].toLowerCase().indexOf(search.toLowerCase()) != -1)	
	}
}


