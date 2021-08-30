import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPage } from '../dashboard/dashboard.page';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: '' },
	{ path: 'dashboard', component: DashboardPage },
	{ path: 'vehicles', component: DashboardPage },
	{ path: 'lands', component: DashboardPage },
	{ path: 'parts', component: DashboardPage },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class SideMenuWidgetsRoutingModule { }
