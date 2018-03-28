import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImageViewerController } from 'ionic-img-viewer';


declare var google;


/**
* Generated class for the PantalladosPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
selector: 'page-pantallados',
templateUrl: 'pantallados.html',
})
export class PantalladosPage {
  _imageViewerCtrl: ImageViewerController;


constructor(public navCtrl: NavController, public navParams: NavParams,imageViewerCtrl: ImageViewerController) {
      this._imageViewerCtrl = imageViewerCtrl;

}

ionViewDidLoad() {
this.initMap();
}

initMap() {
var Guanare = {lat: 9.0329208, lng: -69.7465526};
var Gato = {lat: 8.975953, lng: -69.738999};

var map = new google.maps.Map(document.getElementById('map'), {
zoom: 13,
center: Guanare,
mapTypeId: google.maps.MapTypeId.ROADMAP
});

var contentString = '<div id="content">'+
'<div id="siteNotice">'+
'</div>'+
'<h1 id="firstHeading" class="firstHeading">Marcador2</h1>'+
'<div id="bodyContent">'+

'</div>'+
'</div>';

var contentString2 = '<div id="content">'+
'<div id="siteNotice">'+
'</div>'+
'<h1 id="firstHeading" class="firstHeading">Marcador1</h1>'+
'<div id="bodyContent">'+

'</div>'+
'</div>';

var infowindow = new google.maps.InfoWindow({
content: contentString
});

var infowindow2 = new google.maps.InfoWindow({
content: contentString2
});


var marker = new google.maps.Marker({
position: Guanare,
map: map,
title: ''
});
marker.addListener('click', function() {
infowindow.open(map, marker);
});


var marker2 = new google.maps.Marker({
position: Gato,
map: map,
title: ''
});
marker2.addListener('click', function() {
infowindow2.open(map, marker2);
});
}

 presentImage(myImage) {
    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();
  }
  presentImage2(myImage2) {
    const imageViewer = this._imageViewerCtrl.create(myImage2);
    imageViewer.present();
  }


  MoveToPage(){
  	this.navCtrl.push('PantallatresPage');
  }

}
