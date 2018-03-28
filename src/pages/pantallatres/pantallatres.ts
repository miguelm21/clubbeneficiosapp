import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';


/**
 * Generated class for the PantallatresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pantallatres',
  templateUrl: 'pantallatres.html',
})
export class PantallatresPage {
  @ViewChild(Slides) slides: Slides;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PantallatresPage');
  }
goToSlide() {
    this.slides.slideNext(2);
  }
  MoveToPage(){
  	this.navCtrl.push('PantallatiendaPage');
  }


}
