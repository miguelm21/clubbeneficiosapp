import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImageViewerController } from 'ionic-img-viewer';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  _imageViewerCtrl: ImageViewerController;


  constructor(public navCtrl: NavController, public navParams: NavParams,imageViewerCtrl: ImageViewerController) {
      this._imageViewerCtrl = imageViewerCtrl;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

MoveToPage2() {
	this.navCtrl.push('PantallaunoPage');
}
MoveToPageNoticias(){
  this.navCtrl.push('PantallanovedadesPage');
}
MoveToPageBeneficios(){
  this.navCtrl.push('PantalladosPage');
}

 presentImage(myImage) {
    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();
  }

}
