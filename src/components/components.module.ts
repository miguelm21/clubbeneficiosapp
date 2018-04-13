import { NgModule } from '@angular/core';
import { ShrinkingSegmentHeader } from './shrinking-segment-header/shrinking-segment-header';
import { ExpandableHeader } from './expandable-header/expandable-header';
@NgModule({
	declarations: [ShrinkingSegmentHeader,
	ExpandableHeader],
	// schemas: [
	//   CUSTOM_ELEMENTS_SCHEMA
	// ],
	imports: [],
	exports: [ShrinkingSegmentHeader,
	ExpandableHeader]
})
export class ComponentsModule {}
