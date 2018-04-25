import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { ImageViewerController } from 'ionic-img-viewer';


/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
    _imageViewerCtrl: ImageViewerController;


  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl: MenuController,imageViewerCtrl: ImageViewerController) {
       this._imageViewerCtrl = imageViewerCtrl; 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
    this.menuCtrl.close();
  }
   presentImage(myImage) {
    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();
  }
  MoveToHome(){
  	this.navCtrl.popToRoot();
  }
  MoveToPage(){
    this.navCtrl.push('EditperfilPage');
  }
  ChangePassword(){
    this.navCtrl.push('PasswordPage');
  }

}


