import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var google: any;

@Component({
selector: 'page-home',
templateUrl: 'home.html'
})

export class HomePage {

@ViewChild('map') mapRef: ElementRef;


constructor(public navCtrl: NavController) {}

ionViewDidLoad() {
this.initMap();
}


initMap() {

// Variables para los Marcadores.
var service;
var callback;

var Abstrapp = new google.maps.LatLng(9.0329208,-69.7465526);


var map = new google.maps.Map(document.getElementById('map'), {
center: {lat: 9.0329208, lng: -69.7465526},
zoom: 14,
mapTypeId: 'roadmap'
});


var request = {
location: Abstrapp,
radius: '500',
types: ['store']
};

service = new google.maps.places.PlacesService(map);
service.nearbySearch(request, callback);


// Create the search box and link it to the UI element.
var input = document.getElementById('pac-input');
var SearchBox = new google.maps.places.SearchBox(input);
map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

// Bias the SearchBox results towards current map's viewport.
map.addListener('bounds_changed', function() {
SearchBox.setBounds(map.getBounds());
});

var markers = [];
// Listen for the event fired when the user selects a prediction and retrieve
// more details for that place.
SearchBox.addListener('places_changed', function() {
var places = SearchBox.getPlaces();

if (places.length == 0) {
return;
}

// Clear out the old markers.
markers.forEach(function(marker) {
marker.setMap(null);
});
markers = [];

// For each place, get the icon, name and location.
var bounds = new google.maps.LatLngBounds();
places.forEach(function(place) {
if (!place.geometry) {
console.log("Returned place contains no geometry");
return;
}
var icon = {
url: place.icon,
size: new google.maps.Size(71, 71),
origin: new google.maps.Point(0, 0),
anchor: new google.maps.Point(17, 34),
scaledSize: new google.maps.Size(25, 25)
};

// Create a marker for each place.
markers.push(new google.maps.Marker({
map: map,
icon: icon,
title: place.name,
position: place.geometry.location
}));

if (place.geometry.viewport) {
// Only geocodes have viewport.
bounds.union(place.geometry.viewport);
} else {
bounds.extend(place.geometry.location);
}
});
map.fitBounds(bounds);
});

// Contenido de los Marcadores
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
'<h1 id="firstHeading" class="firstHeading">Marcador3</h1>'+
'<div id="bodyContent">'+

'</div>'+
'</div>';

var infowindow = new google.maps.InfoWindow({
content: contentString
});

var infowindow2 = new google.maps.InfoWindow({
content: contentString2
});

// Marcadores



}


callback(results, status) {
if (status == google.maps.places.PlacesServiceStatus.OK) {
for (var i = 0; i < results.length; i++) {
var place = results[i];
createMarker(results[i]);
}
}
}

}
