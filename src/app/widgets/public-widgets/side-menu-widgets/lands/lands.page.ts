import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-lands',
	templateUrl: './lands.page.html',
	styleUrls: ['./lands.page.scss'],
})
export class LandsPage implements OnInit {
	public folder: string;

	constructor(private activatedRoute: ActivatedRoute) { }

	public ngOnInit(): void {
		//
	}

}
