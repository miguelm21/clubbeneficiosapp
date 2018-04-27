import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController,LoadingController } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl: MenuController,public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: '<img src="../../assets/spinner2.gif"/>'
    });
    loading.present();
    loading.dismiss();
    console.log('ionViewDidLoad RegisterPage');
    this.menuCtrl.close();
  }

keytab(event){
    let element = event.srcElement.nextElementSibling; // get the sibling element

    if(element == null)  // check if its null
        return;
    else
        element.focus();   // focus if not null
}

}
