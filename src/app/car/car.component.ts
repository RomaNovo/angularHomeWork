import { Component, OnInit, Input } from '@angular/core';
import { ConsoleService } from '../console.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
}) 

export class CarComponent implements OnInit {


	@Input() car;

  constructor(private consServ : ConsoleService) { }

  ngOnInit() {
  }
 	
 	getClass() {
 		return {
 			'list-group-item-success' : !this.car.isSold,
 			'list-group-item-danger' : this.car.isSold,
 			'list-group-item' : true
 		}
 	}

 	onAction(type:string) {
 		this.car.isSold = type === 'buy' ? true : false;
 		this.consServ.log(`${this.car.name} статус ${type}`)
 	}

}
