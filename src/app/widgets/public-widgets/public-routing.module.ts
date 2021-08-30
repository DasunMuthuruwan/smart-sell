import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPage } from './dashboard/dashboard.page';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'menu/dashboard',
		pathMatch: 'full',
	},
	{ path: 'menu/dashboard', component: DashboardPage },
	{
		path: 'menu/:id',
		loadChildren: () => import('./side-menu-widgets/side-menu-widgets.module').then(m => m.SideMenuWidgetsModule),
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PublicViewRoutingModule { }
