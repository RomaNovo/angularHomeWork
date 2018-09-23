import { FormControl } from '@angular/forms';

export function asyncValidator(control : FormControl): Promise<any>{
	return new Promise( resolve => {

		setTimeout( ()=>{
			const value = control.value;
			const emailRegex = /[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i;
			const valid = emailRegex.test(value);

			if(valid) {
				resolve(null);
			} else {
				resolve({
					'asyncValidator': true
				})
			}

		},5000);
	})
}