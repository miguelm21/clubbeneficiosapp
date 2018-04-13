import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoryPage } from './category';

@NgModule({
  declarations: [
    CategoryPage,
  ],
  schemas: [
  CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    IonicPageModule.forChild(CategoryPage),
  ],
})
export class CategoryPageModule {}
