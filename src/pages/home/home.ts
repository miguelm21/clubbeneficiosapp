import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { ImageViewerController } from 'ionic-img-viewer';
import { Geolocation } from '@ionic-native/geolocation';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { Http } from '@angular/http';
import { Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import 'rxjs/add/operator/map'


declare var google;
declare var map;


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
  section: string = 'one';
  somethings: any = new Array(20);
  _imageViewerCtrl: ImageViewerController;
    @ViewChild(Slides) slides: Slides;
  latitude;
  longitude;



  constructor(public navCtrl: NavController, public navParams: NavParams,private http: Http,imageViewerCtrl: ImageViewerController, public menuCtrl: MenuController,private locationAccuracy: LocationAccuracy, public geolocation: Geolocation) {
      this._imageViewerCtrl = imageViewerCtrl;   
  }

 ionViewWillEnter() {
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
  }


initMap() {
/*  this.geolocation.getCurrentPosition().then((position) => {
    this.latitude = position.coords.latitude;
    this.longitude  =position.coords.longitude;

    alert(this.latitude);
    alert(this.longitude);*/
    
    var Gastronomia = {lat: -32.899569, lng: -68.846949};
    var Entretenimiento = {lat: -32.879569, lng: -68.816949};
    var Turismo = {lat: -32.909569, lng: -68.876949};
    var Moda = {lat: -32.879569, lng: -68.876949};
    var Belleza = {lat: -32.909569, lng: -68.816949};
    var Hogar = {lat: -32.869569, lng: -68.846949};

    var Centro = {lat: -32.889459, lng: -68.845839}; 
/*
    var Lat = this.latitude;
    var Lng = this.longitude;*/
/*
    var latlng = {lat: Lat, lng: Lng};*/

    //let latLng = new google.maps.LatLng(lat: -32.889459, lng: -68.845839);

    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: Centro,
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

    var contentString2 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h3 id="firstHeading" class="firstHeading">Entretenimiento</h3>'+
    '<div id="bodyContent">'+

    '</div>'+
    '</div>';

    var contentString3 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h3 id="firstHeading" class="firstHeading">Turismo</h3>'+
    '<div id="bodyContent">'+

    '</div>'+
    '</div>';

    var contentString4 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h3 id="firstHeading" class="firstHeading">Moda</h3>'+
    '<div id="bodyContent">'+

    '</div>'+
    '</div>';

    var contentString5 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h3 id="firstHeading" class="firstHeading">Belleza</h3>'+
    '<div id="bodyContent">'+

    '</div>'+
    '</div>';

    var contentString6 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h3 id="firstHeading" class="firstHeading">Deco y Hogar</h3>'+
    '<div id="bodyContent">'+

    '</div>'+
    '</div>';

    var infowindow = new google.maps.InfoWindow({
    content: contentString
    });

    var infowindow2 = new google.maps.InfoWindow({
    content: contentString2
    });

    var infowindow3 = new google.maps.InfoWindow({
    content: contentString3
    });

    var infowindow4 = new google.maps.InfoWindow({
    content: contentString4
    });

    var infowindow5 = new google.maps.InfoWindow({
    content: contentString5
    });

    var infowindow6 = new google.maps.InfoWindow({
    content: contentString6
    });

    //Markers
    var marker = new google.maps.Marker({
    position: Gastronomia,
    map: map,
    "icon": 'https://icon-icons.com/icons2/1151/PNG/32/1486505264-food-fork-kitchen-knife-meanns-restaurant_81404.png',
    title: ''
    });
    marker.addListener('click', function() {
    infowindow.open(map, marker);
    });

    var marker2 = new google.maps.Marker({
    position: Entretenimiento,
    map: map,
    icon: "https://icon-icons.com/icons2/1149/PNG/32/1486504374-clip-film-movie-multimedia-play-short-video_81330.png",
    title: ''
    });
    marker2.addListener('click', function() {
    infowindow2.open(map, marker2);
    });

    var marker3 = new google.maps.Marker({
    position: Turismo,
    map: map,
    icon: "https://icon-icons.com/icons2/1146/PNG/32/1486485566-airliner-rplane-flight-launch-rbus-plane_81166.png",
    title: ''
    });
    marker3.addListener('click', function() {
    infowindow3.open(map, marker3);
    });

    var marker4 = new google.maps.Marker({
    position: Moda,
    map: map,
    icon: "https://icon-icons.com/icons2/197/PNG/32/scissors_24029.png",
    title: ''
    });
    marker4.addListener('click', function() {
    infowindow4.open(map, marker4);
    });

    var marker5 = new google.maps.Marker({
    position: Belleza,
    map: map,
    icon: "https://icon-icons.com/icons2/1130/PNG/32/womaninacircle_80046.png",
    title: ''
    });
    marker5.addListener('click', function() {
    infowindow5.open(map, marker5);
    });

    var marker6 = new google.maps.Marker({
    position: Hogar,
    map: map,
    icon: "https://icon-icons.com/icons2/1151/PNG/32/1486505259-estate-home-house-building-property-real_81428.png",
    title: ''
    });
    marker6.addListener('click', function() {
    infowindow6.open(map, marker6);
    });

/*  }).catch((error) => {
      alert('Error getting location');
    });*/
}

 MoveToCategory(){
     this.navCtrl.push('CategoryPage');
 }
  

 presentImage(myImage) {
    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();
  }

}
