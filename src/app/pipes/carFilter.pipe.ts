import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name : 'carFilter',
	pure : false
})

export class CarFilterPipe implements PipeTransform {
	

	transform(carList, search:string, carField:string) {
		console.log('this carFilter')
		if(carList.length === 0 || search.length === 0 ) {
			return carList;
		}

		return carList.filter( (car)=> car.name.toLowerCase().indexOf(search.toLowerCase()) != -1)	
	}

	addCar() {

	}
}


