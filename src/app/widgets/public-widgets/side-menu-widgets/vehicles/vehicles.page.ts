import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-vehicles',
	templateUrl: './vehicles.page.html',
	styleUrls: ['./vehicles.page.scss'],
})
export class VehiclesPage implements OnInit {
	public folder: string;

	constructor(private activatedRoute: ActivatedRoute) { }

	public ngOnInit(): void {
		//
	}

}
