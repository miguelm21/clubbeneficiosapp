import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
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
	information: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,private http: Http) {
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

}
