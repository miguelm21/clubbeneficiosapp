import { Component, ViewChild } from '@angular/core';
import { AnimationService} from 'css-animator';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';



/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {
  @ViewChild('myElement') myElem;
  section: string = 'one';


  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
     let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: '<img src="../../assets/spinner3.gif"/>'
    });
    loading.present();
    loading.dismiss();
    console.log('ionViewDidLoad CategoryPage');
  }

  MoveToHome(){
  	this.navCtrl.popToRoot();
  }

}
