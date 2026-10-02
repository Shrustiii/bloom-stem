import { Routes } from '@angular/router';
import { Home } from './home/home';
import { FloristAdd } from './florists/florist-add/florist-add';
import { FloristList } from './florists/florist-list/florist-list';
import { FlowerAdd } from './flowers/flower-add/flower-add';
import { FlowerList } from './flowers/flower-list/flower-list';
import { Florists } from './florists/florists';
import { Flowers } from './flowers/flowers';

export const routes: Routes = [
	{path: '', component: Home},
	{path: 'florists', component:Florists},
	{path: 'floristAdd', component: FloristAdd},
	{path: 'floristView', component: FloristList},
	{path: 'flowers', component: Flowers},
	{path: 'flowerAdd', component: FlowerAdd},
	{path: 'flowerView', component: FlowerList}
];
