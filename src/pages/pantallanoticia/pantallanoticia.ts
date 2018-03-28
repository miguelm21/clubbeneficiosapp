import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PantallanoticiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pantallanoticia',
  templateUrl: 'pantallanoticia.html',
})
export class PantallanoticiaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PantallanoticiaPage');
  }
MoveToPage() {
	this.navCtrl.push('PantallaunoPage');
}
}
