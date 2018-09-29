import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()

export class CarService {

	constructor(private http: Http){}

	getCar(){
		return this.http.get('http://localhost:3000/cars')
		.map( (response) => response.json());
	}

	addCar(name:string){
		const data = { name, 'color': 'white'};
		return this.http.post('http://localhost:3000/cars', data)
				.map(response=> response.json());
	}

	changeColor(car: any) {
		return this.http.put(`http://localhost:3000/cars/${car.id}`, car)
			.map( (response) => response.json())
	}

}