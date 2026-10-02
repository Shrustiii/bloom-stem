import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Florist } from '../florist';
import { FloristService } from '../florist-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-florist-add',
  imports: [FormsModule, RouterLink],
  templateUrl: './florist-add.html',
  styleUrl: './florist-add.css',
})
export class FloristAdd {
	florist: Florist = {
		id:0,
		name:''
	};
	
	floristService = inject(FloristService)
	
	saveFlorist(): void{
		const data = {
			name: this.florist.name
		};
		
		this.floristService.saveFlorist(data);
		
		this.florist.name="";
		
	}
}
