import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Florist } from './florist';

// const restUrlFlowers = 'api/v1/flowers';

const restUrlFlorists = '/api/v1/florists';

@Injectable({
  providedIn: 'root',
})
export class FloristService {
  private http = inject(HttpClient);

  florists = signal<Florist[]>([]);
  
  getFlorists(): void{
	this.http.get<Florist[]>(restUrlFlorists).subscribe(data =>{
		console.log("Data:", data);
		this.florists.set(data);
	})
  }

  saveFlorist(data: Florist): void {
    this.http.post<Florist>(restUrlFlorists, data).subscribe(saved => {
      this.florists.update(florists => [...florists, saved]);
    });
  }
}