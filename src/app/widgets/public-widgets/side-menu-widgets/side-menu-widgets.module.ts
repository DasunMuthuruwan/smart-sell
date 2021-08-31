
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../../../app/modules/angular-material.module';
import { LandsPage } from './lands/lands.page';
import { VehiclesPage } from './vehicles/vehicles.page';

@NgModule({
	imports: [
		CommonModule,
		AngularMaterialModule,
		ReactiveFormsModule,
		FormsModule,
	],
	declarations: [
		VehiclesPage,
		LandsPage,
	],
	exports: [
		VehiclesPage,
		LandsPage,
	],
})
export class SideMenuWidgetsModule {
}
