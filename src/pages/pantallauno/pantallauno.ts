import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { ImageViewerController } from 'ionic-img-viewer';
import 'rxjs/add/operator/map'


/**
 * Generated class for the PantallaunoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pantallauno',
  templateUrl: 'pantallauno.html',
})
export class PantallaunoPage {
  _imageViewerCtrl: ImageViewerController;
	information: any[];
  @ViewChild(Slides) slides: Slides;


  constructor(public navCtrl: NavController, public navParams: NavParams,private http: Http,imageViewerCtrl: ImageViewerController) {
  this._imageViewerCtrl = imageViewerCtrl;
  let localData = http.get('assets/information.json').map(res => res.json().items);
    localData.subscribe(data => {
      this.information = data;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PantallaunoPage');
  }

 toggleSection(i) {
    this.information[i].open = !this.information[i].open;
  }
 
  toggleItem(i, j) {
    this.information[i].children[j].open = !this.information[i].children[j].open;
  }

  MoveToPage3() {
	this.navCtrl.push('PantalladosPage');
}
Back(){
  this.navCtrl.push('HomePage');
}
presentImage(myImage) {
    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();
  }

}
