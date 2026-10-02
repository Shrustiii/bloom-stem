import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Flower } from '../flower';
import { FlowerService } from '../flower-service';
import { FloristService } from '../../florists/florist-service';



@Component({
  selector: 'app-flower-add',
  imports: [FormsModule, CommonModule],
  templateUrl: './flower-add.html',
  styleUrl: './flower-add.css',
})
export class FlowerAdd {
	flower: Flower = {
		id:0,
		name:"",
		price:0,
		quantity:0,
		floristName:""
	};
	
	flowerService = inject(FlowerService)
	floristService = inject(FloristService)
	
	ngOnInit() {
	  this.floristService.getFlorists();
	}
	
	saveFlower(): void{
		const data = {
			name: this.flower.name,
			price: this.flower.price, 
			quantity: this.flower.quantity, 
			floristName: this.flower.floristName, 

		};
	
		this.flowerService.saveFlower(data);
		
		this.flower.name="";
		this.flower.price=0,
		this.flower.quantity =0, 
		this.flower.floristName=""
	}
}
