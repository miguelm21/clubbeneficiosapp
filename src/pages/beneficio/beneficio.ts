import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import 'rxjs/add/operator/map';


declare var google;
declare var map;


/**
 * Generated class for the BeneficioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-beneficio',
  templateUrl: 'beneficio.html',
})
export class BeneficioPage {
	latitude;
	longitude;

  constructor(public navCtrl: NavController, public navParams: NavParams,private locationAccuracy: LocationAccuracy, public geolocation: Geolocation) {
  }

  ionViewDidLoad() {
  	this.locationAccuracy.canRequest().then((canRequest: boolean) => {
  		if(canRequest) {
        // the accuracy option will be ignored by iOS
        this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
        	() => console.log('Request successful'),
        	error => console.log('Error requesting location permissions', error)
        	);
    }
});
  	this.initMap();
  	console.log('ionViewDidLoad BeneficioPage');
  }


  initMap() {
/*  this.geolocation.getCurrentPosition().then((position) => {
    this.latitude = position.coords.latitude;
    this.longitude  =position.coords.longitude;

    alert(this.latitude);
    alert(this.longitude);*/
    
    var Gastronomia = {lat: -32.899569, lng: -68.846949};

/*
    var Lat = this.latitude;
    var Lng = this.longitude;*/
/*
var latlng = {lat: Lat, lng: Lng};*/

    //let latLng = new google.maps.LatLng(lat: -32.889459, lng: -68.845839);

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: Gastronomia,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    //InforWindows

    var contentString = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h3 id="firstHeading" class="firstHeading">Gastronomia</h3>'+
    '<div id="bodyContent">'+

    '</div>'+
    '</div>';

   

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

  

    //Markers
    var marker = new google.maps.Marker({
        position: Gastronomia,
        map: map,
        "icon": 'https://icon-icons.com/icons2/1151/PNG/32/1486505264-food-fork-kitchen-knife-meanns-restaurant_81404.png',
        title: ''
    });

/*  }).catch((error) => {
      alert('Error getting location');
  });*/
}

MoveToBack(){
	this.navCtrl.pop();
}

}
