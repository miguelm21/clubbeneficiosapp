import { NgModule,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { ExpandableHeader } from '../../components/expandable-header/expandable-header';
// import { ComponentsModule } from '../../components/components.module';

@NgModule({
	declarations: [
	HomePage,
	ExpandableHeader
	],
	schemas: [
	CUSTOM_ELEMENTS_SCHEMA
	],
	// components: [
	// ComponentsModule
	// ],
	imports: [
	IonicPageModule.forChild(HomePage),
	],
})
export class HomePageModule {}
