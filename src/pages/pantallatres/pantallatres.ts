import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { ImageViewerController } from 'ionic-img-viewer';



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
  _imageViewerCtrl: ImageViewerController;
  @ViewChild(Slides) slides: Slides;


  constructor(public navCtrl: NavController, public navParams: NavParams, imageViewerCtrl: ImageViewerController) {
    this._imageViewerCtrl = imageViewerCtrl;
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
presentImage(myImage) {
    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();
  }
  Back(){
    this.navCtrl.push('PantalladosPage');
  }

}
