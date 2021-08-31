import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPage } from './dashboard/dashboard.page';
import { LandsPage } from './side-menu-widgets/lands/lands.page';
import { VehiclesPage } from './side-menu-widgets/vehicles/vehicles.page';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'dashboard',
		pathMatch: 'full',
	},
	{ path: 'dashboard', component: DashboardPage },
	{ path: 'vehicles', component: VehiclesPage },
	{ path: 'lands', component: LandsPage },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PublicViewRoutingModule { }
