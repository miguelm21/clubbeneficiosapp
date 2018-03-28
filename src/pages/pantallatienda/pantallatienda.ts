import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PantallatiendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pantallatienda',
  templateUrl: 'pantallatienda.html',
})
export class PantallatiendaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PantallatiendaPage');
  }

MoveToPage(){
	this.navCtrl.push('PantallatresPage');
}
MoveToPage2(){
	this.navCtrl.push('PantallaunoPage');
}
}
