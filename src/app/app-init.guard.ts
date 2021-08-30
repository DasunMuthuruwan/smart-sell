import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable({
	providedIn: 'root',
})
export class AppInitGuard implements CanActivate {

	constructor() {
		//
	}

	public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {

		return new Promise((resolve, reject) => {
			resolve(true);
		});
	}
}
