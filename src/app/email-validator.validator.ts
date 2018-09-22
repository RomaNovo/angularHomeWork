import { FormControl } from '@angular/forms';

export function emailValidator(control: FormControl) {
	const value = control.value;
	const emailRegex = /[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i;
	const valid = emailRegex.test(value);

	if(valid) {
		return null;
	} else {
		return {
			emailValidator: true
		}
	}
}