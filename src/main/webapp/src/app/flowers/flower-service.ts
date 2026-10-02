import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Flower } from './flower';

const restUrlFlowers = 'api/v1/flowers';

@Injectable({
  providedIn: 'root',
})
export class FlowerService {
	private http = inject(HttpClient);
	
	flowers = signal<Flower[]>([]);
	
	getFlowers(): void{
		this.http.get<Flower[]> (restUrlFlowers).subscribe(data =>{
			console.log("Data:", data);
			this.flowers.set(data);
		});
	}
	
	saveFlower(data: Flower): void{
		this.http.post(restUrlFlowers, data).subscribe(saved =>{
			this.flowers.update(flowers => [...flowers, saved]);
		})
	}
	
	deleteFlowerById(id:number):void{
			this.http.delete(restUrlFlowers+"/"+id).subscribe();
	}
}
