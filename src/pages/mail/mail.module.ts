import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MailPage } from './mail';

@NgModule({
  declarations: [
    MailPage,
  ],
  imports: [
    IonicPageModule.forChild(MailPage),
  ],
})
export class MailPageModule {}
