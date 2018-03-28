import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PantallanoticiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pantallanovedades',
  templateUrl: 'pantallanovedades.html',
})
export class PantallanovedadesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PantallanovedadesPage');
  }

  MoveToPageNoticia(){
  	this.navCtrl.push('PantallanoticiaPage');
  }
  MoveToPage() {
  this.navCtrl.push('PantallaunoPage');
}

}
