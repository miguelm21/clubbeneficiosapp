import { NgModule } from '@angular/core';
import { ShrinkingSegmentHeader } from './shrinking-segment-header/shrinking-segment-header';
import { ExpandableHeader } from './expandable-header/expandable-header';
@NgModule({
	declarations: [ShrinkingSegmentHeader,
	ExpandableHeader],
	imports: [],
	exports: [ShrinkingSegmentHeader,
	ExpandableHeader]
})
export class ComponentsModule {}
