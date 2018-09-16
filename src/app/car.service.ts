export class CarService {

	cars = [
		{
			name: 'Ford',
			isSold: false
		},
		{
			name: 'Mazda',
			isSold: false
		},
		{
			name: 'Mercedes', 
			isSold: true
		}
	];

	addCar(name:string) {
		this.cars.push({ isSold: false, name })
	}

}