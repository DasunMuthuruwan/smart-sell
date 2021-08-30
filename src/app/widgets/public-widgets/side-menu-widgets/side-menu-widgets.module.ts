
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../../../app/modules/angular-material.module';
import { SideMenuWidgetsRoutingModule } from './side-menu-widgets.routing.module';

@NgModule({
	imports: [
		CommonModule,
		SideMenuWidgetsRoutingModule,
		AngularMaterialModule,
		ReactiveFormsModule,
		FormsModule,
	],
	declarations: [
	],
	exports: [
	],
})
export class SideMenuWidgetsModule {
}
