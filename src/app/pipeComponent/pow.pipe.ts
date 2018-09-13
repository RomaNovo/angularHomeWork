import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'powPipe'
})

export class PowPipe implements PipeTransform {

	transform(value:number, powNum:number) {
		return Math.pow(value, powNum)
	}
}