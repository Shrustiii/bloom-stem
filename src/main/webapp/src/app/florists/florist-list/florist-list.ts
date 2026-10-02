import { Component, inject } from '@angular/core';
import { FloristService } from '../florist-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-florist-list',
  imports: [RouterLink],
  templateUrl: './florist-list.html',
  styleUrl: './florist-list.css',
})
export class FloristList {
	floristService = inject(FloristService);
	
	ngOnInit(): void{
		console.log("Component Loaded");
		this.floristService.getFlorists();
	}
	
}
