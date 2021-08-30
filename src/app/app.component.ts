
import { Component } from '@angular/core';
@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss'],
})
export class AppComponent {
	public appPages = [
	{ title: 'Dash Board', url: '/public/menu/dashboard', icon: 'mail' },
	{ title: 'Vehicles', url: '/public/menu/vehicles', icon: 'paper-plane' },
	{ title: 'Lands', url: '/public/menu/lands', icon: 'heart' },
	// { title: 'Parts', url: 'public/menu/parts', icon: 'archive' },
	];
	constructor() {
	//
	}
}
