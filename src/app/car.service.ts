import { Injectable } from '@angular/core';

@Injectable()
export class CarService {
    cars = [
        {   'name': 'Ford',
            id: 1 
        },
        {   'name': 'Nissan',
            id: 2 
        },
        {   'name': 'Mazda',
            id: 3  
        }
    ]
}