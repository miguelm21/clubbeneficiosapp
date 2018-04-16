import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoryPage } from './category';
import { ExplandableHeader } from '../../components/explandable-header/explandable-header';


@NgModule({
  declarations: [
    CategoryPage,
    ExplandableHeader
  ],
  schemas: [
  CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    IonicPageModule.forChild(CategoryPage),
  ],
})
export class CategoryPageModule {}
