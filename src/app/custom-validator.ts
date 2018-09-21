import { AbstractControl, ValidatorFn } from '@angular/forms';

export function equalValidator(control: AbstractControl): { [ key : string] : any} {
	const value = control.value;
	const [first, ...rest] = Object.keys(value);
	const valid = rest.every(v => rest[v] === value[v]);

	return valid ?  null :  { equalValidator }  
}


export function rangeValidator(min : number, max: number): ValidatorFn {
	return (control: AbstractControl): { [key : string]:any } =>{
		const value = control.value;
		const numValue = Number(control.value);

		if(isNaN(numValue)) {
			return { rangeValidator : numValue }
		} else if (numValue <= min || numValue >= max) {
			return { rangeValidator : numValue }
		}
		else {
			return null;
		}
	}
}


	
