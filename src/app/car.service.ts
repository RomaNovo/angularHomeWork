import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()

export class CarService {

	constructor(private http: Http){}

	getCar(){
		return this.http.get('http://localhost:3000/cars');
	}
}