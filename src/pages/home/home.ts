import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { ImageViewerController } from 'ionic-img-viewer';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'



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
section: string = 'two';
    somethings: any = new Array(20);
      information: any[];
  _imageViewerCtrl: ImageViewerController;


  constructor(public navCtrl: NavController, public navParams: NavParams,private http: Http,imageViewerCtrl: ImageViewerController, public menuCtrl: MenuController) {
      this._imageViewerCtrl = imageViewerCtrl;
      let localData = http.get('assets/information.json').map(res => res.json().items);
    localData.subscribe(data => {
      this.information = data;
    })

  }

 
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  toggleSection(i) {
    this.information[i].open = !this.information[i].open;
  }
 
  toggleItem(i, j) {
    this.information[i].children[j].open = !this.information[i].children[j].open;
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
