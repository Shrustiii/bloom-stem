import { Component, inject } from '@angular/core';
import { FlowerService } from '../flower-service';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-flower-list',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './flower-list.html',
  styleUrl: './flower-list.css',
})
export class FlowerList {
  flowerService = inject(FlowerService);

  ngOnInit(): void {
    console.log('Component loaded');
    this.flowerService.getFlowers();
  }

  deleteFlower(id: any): void {
    if (confirm('Are you sure you want to delete ' + id + '?')) {
      this.flowerService.deleteFlowerById(id);
      window.location.reload();
    }
  }
}
