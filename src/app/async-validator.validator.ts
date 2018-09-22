import { FormControl, ValidationErrors} from '@angular/forms';

export function asyncEmailValidator(control: FormControl) {
	return new Promise( resolve => {
		console.log('start validation')
		setTimeout(()=> {
			const value = control.value;
			const emailRegex = /[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i;

			const result = emailRegex.test(value);
			console.log('result --' +result)

			if(result) {
				console.log('validated');
				resolve(null) ;
			} else {
				console.log('error')
				resolve ({
					'asyncEmailValidator' : {
						valid: false
					}
				})
			}
		}, 5000);
	})
}