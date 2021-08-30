import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.page.html',
	styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
	public folder: string;

	constructor(private activatedRoute: ActivatedRoute) { }

	public ngOnInit(): void {
		this.folder = 'Dashboard';
	}

}
