
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../../app/modules/angular-material.module';
import { DashboardPage } from './dashboard/dashboard.page';
import { PublicViewRoutingModule } from './public-routing.module';

@NgModule({
	imports: [
		CommonModule,
		PublicViewRoutingModule,
		AngularMaterialModule,
		ReactiveFormsModule,
		FormsModule,
	],
	declarations: [
		DashboardPage,
	],
	exports: [
		DashboardPage,
	],
})
export class PublicWidgetsModule {
}
