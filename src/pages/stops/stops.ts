import { Component, ViewChild } from '@angular/core';
import { NavController, ModalController  } from 'ionic-angular'; //ActionSheetController
//import { GoogleMap, GoogleMapsLatLng } from 'ionic-native';
import { Geolocation, Geoposition } from '@ionic-native/geolocation'; 
//import { Geoposition} from '@ionic-native/geoposition'; 


import { googlemaps } from 'googlemaps';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'

//import * as $ from 'jquery';

/*
var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
mapboxgl.accessToken = 'pk.eyJ1IjoiZGx2aXZhbmNvIiwiYSI6ImNqMzBjY3ZpcTAwMWcycXBnN251b3M0Z2IifQ.qhYk3raWsVyuhbMvr1B4LA';
var map = new mapboxgl.Map({
container: 'YOUR_CONTAINER_ELEMENT_ID',
style: 'mapbox://styles/mapbox/streets-v9'
});
*/
@Component({
  selector: 'page-stops',
  templateUrl: 'stops.html'
})
export class StopsPage {

  @ViewChild('map') mapElement;
   //map: any;
   infoWindows: any;
   Coordinates: any;
   watch:any;
   map: any;


  constructor(
              public navCtrl: NavController, 
              public modalCtrl: ModalController, 
              private geolocation: Geolocation) 
  {
    this.infoWindows = [];
  }


  ionViewDidEnter() {
    
      /*Initializing geolocation*/
    let options = {
      frequency: 3000,
      enableHighAccuracy: true
    };

    this.watch = this.geolocation.watchPosition(options)
    .subscribe((position: Geoposition) => {
      console.log(position);
      this.Coordinates = position.coords;
      this.executemap()
    }); 
      
  }

   executemap(){

     /*Initializing Map*/
    mapboxgl.accessToken = 'pk.eyJ1IjoiZGx2aXZhbmNvIiwiYSI6ImNqMzBjY3ZpcTAwMWcycXBnN251b3M0Z2IifQ.qhYk3raWsVyuhbMvr1B4LA';
    this.map = new mapboxgl.Map({
       style: 'mapbox://styles/mapbox/streets-v9',
       center: [this.Coordinates.longitude, this.Coordinates.latitude],
       minZoom: 12,
       //pitch: 80,
      // Zoom: 12, //restrict map zoom - buildings not visible beyond 13
       //maxZoom: 17,
       container: 'map'
     });

   this.map.on('load', function() {
   this.map.addLayer({
    'id': '3d-buildings',
    'source': 'composite',
    'source-layer': 'building',
    'filter': ['==', 'extrude', 'true'],
    'type': 'fill-extrusion',
    'maxzoom': 15,
    'paint': {
     'fill-extrusion-color': '#aaa',
     'fill-extrusion-height': {
      'type': 'identity',
      'property': 'height'
     },
     'fill-extrusion-base': {
      'type': 'identity',
      'property': 'min_height'
     },
     'fill-extrusion-opacity': .6
    }
   });
  });
 }
 /* addInfoWindowToMarker(marker) {
    var infoWindowContent = '<div id="content">' +
        '<h1 id="firstHeading" class="firstHeading">' +
             marker.title + 
         '</h1>' +
          '<p align="center"><button id="x"> Click Me! </button></p>' +
         '</div>';

    var infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent
    });

    marker.addListener('click', () => {
      this.closeAllInfoWindows();
      infoWindow.open(this.map, marker);
    });
    this.infoWindows.push(infoWindow);
  }

  closeAllInfoWindows() {
    for(let window of this.infoWindows) {
      window.close();
    }
  }
  
  ionViewDidLoad(){
  	this.initMap();
  }

  initMap(){
  	let latLng = new google.maps.LatLng(39.5830906, 2.6540206);

  	let mapOptions = {
  		center: latLng,
  		zoom: 12,
  		mapTypeId: google.maps.MapTypeId.ROADMAP
  	};

  	this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    let marker = new google.maps.Marker({
      position: new google.maps.LatLng(39.5748641, 2.6449896),
      map: this.map,
      title: 'test sobre marks map'
    });

    marker.setMap(this.map);
    this.addInfoWindowToMarker(marker);

    google.maps.event.addListener(this.map, "click", () => {
      this.closeAllInfoWindows();

      });
    }*/
}
