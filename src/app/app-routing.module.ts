
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';
import { appRoutes } from './app-routes';

const routes: Routes = appRoutes;

@NgModule({
	  imports: [RouterModule.forRoot(routes,
		{
			enableTracing: environment.enableRouteTracing,
			relativeLinkResolution: 'legacy',
		},
	  )],
	  exports: [RouterModule],
	  providers: [],
})
export class AppRoutingModule { }
