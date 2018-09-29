import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Injectable()

export class CarService {

	constructor(private http: Http){}

	

	getCar(){
		const headers = new Headers({
		'Content-Type' : 'application/json; charset=utf8'
		});

		return this.http.get('http://localhost:3000/cars', {
			headers: headers
		})
		.map( (response) => response.json());
	}

	addCar(name:string){
		const headers = new Headers({
		'Content-Type' : 'application/json; charset=utf8'
		});

		const data = { name, 'color': 'white'};
		return this.http.post('http://localhost:3000/cars', data, {
			headers
		})
				.map(response=> response.json());
	}

	changeColor(car: any) {
		return this.http.put(`http://localhost:3000/cars/${car.id}`, car)
			.map( (response) => response.json())
	}

	delCar(id) {
		return this.http.delete(`http://localhost:3000/cars/${id}`)
			.map( response => response.json());
	}

}