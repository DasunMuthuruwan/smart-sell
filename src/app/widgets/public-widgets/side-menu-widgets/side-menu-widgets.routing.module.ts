import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPage } from '../dashboard/dashboard.page';
import { LandsPage } from './lands/lands.page';
import { VehiclesPage } from './vehicles/vehicles.page';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: '' },
	{ path: 'dashboard', component: DashboardPage },
	{ path: 'vehicles', component: VehiclesPage },
	{ path: 'lands', component: LandsPage },
	// { path: 'parts', component: DashboardPage },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class SideMenuWidgetsRoutingModule { }
