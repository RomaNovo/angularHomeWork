import { Component, OnInit} from '@angular/core';
import { CarService } from '../car.service';

@Component({
    selector: 'app-cars-page',
    templateUrl: './cars-page.component.html',
    styleUrls: ['./cars-page.component.css']
})

export class CarsPageComponent implements OnInit {
    cars = [];

    constructor(private carService: CarService){}

    ngOnInit() {
        this.cars = this.carService.cars;
    }

}

