import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the NoticiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-noticia',
  templateUrl: 'noticia.html',
})
export class NoticiaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: '<img src="../../assets/spinner2.gif"/>'
    });
    loading.present();
    loading.dismiss();
    console.log('ionViewDidLoad NoticiaPage');
  }


  MoveToHome(){
  	this.navCtrl.popToRoot();
  }

}
