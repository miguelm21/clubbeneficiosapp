import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController } from 'ionic-angular';

/**
 * Generated class for the PasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-password',
  templateUrl: 'password.html',
})
export class PasswordPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController,public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
  	let loading = this.loadingCtrl.create({
  		spinner: 'hide',
  		content: '<img src="../../assets/spinner3.gif"/>'
  	});
  	loading.present();
  	loading.dismiss();
  	console.log('ionViewDidLoad PasswordPage');
  	this.menuCtrl.close();
  }
 MoveToBack(){
 	this.navCtrl.popToRoot();
  }

}
