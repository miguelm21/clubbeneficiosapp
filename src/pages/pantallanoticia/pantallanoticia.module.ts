import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PantallanoticiaPage } from './pantallanoticia';

@NgModule({
  declarations: [
    PantallanoticiaPage,
  ],
  imports: [
    IonicPageModule.forChild(PantallanoticiaPage),
  ],
})
export class PantallanoticiaPageModule {}
