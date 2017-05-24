import { Component, ViewChild } from '@angular/core';
import { NavController, ModalController  } from 'ionic-angular'; //ActionSheetController
//import { GoogleMap, GoogleMapsLatLng } from 'ionic-native';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';

import L from 'leaflet';
import 'leaflet.markercluster';

//import { googlemaps } from 'googlemaps';
//import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'



@Component({
  selector: 'page-stops',
  templateUrl: 'stops.html'
})
export class StopsPage {
  cluster;
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
    this.cluster = L.markerClusterGroup();
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
    //   this.executemap()
    });

  }

  ngOnInit(): void {
    let map = L.map('map')
      .setView([39.5748641, 2.6449896], 14);

    L.tileLayer('https://api.tiles.mapbox.com/v4/mapbox.streets-basic/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      zoom: 14,
      accessToken: 'pk.eyJ1IjoiZGx2aXZhbmNvIiwiYSI6ImNqMzBjY3ZpcTAwMWcycXBnN251b3M0Z2IifQ.qhYk3raWsVyuhbMvr1B4LA'
    }).addTo(map);


    let busIcon =  new L.DivIcon({
      className: 'myDivIcon',
      html: '<img class="myDivImage" src="../../assets/img/bus2.png"/>'+
      '<div class="myDivNumber">522</div>'
    });

    let popupLink='<button class="merch-link" data-merchId="200">Eres un pro</button>'
    // let busIcon = L.icon({
    //   iconUrl: '../../assets/img/bus2.png',
    //
    //   iconSize:     [60, 60], // size of the icon
    //   // shadowSize:   [50, 64], // size of the shadow
    //   // iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    //   // shadowAnchor: [4, 62],  // the same for the shadow
    //   // popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    // });

    this.cluster.addLayer(L.marker([39.5717899,2.6545994], {icon: busIcon}).bindPopup(popupLink));

    this.cluster.addLayer(L.marker([39.5757088,2.653719], {icon: busIcon}).bindPopup(popupLink));
    this.cluster.addLayer(L.marker([0,0], {icon: busIcon}));


    map.addLayer(this.cluster);
  }

 //   executemap()39.5717899
 //
 //     /*Initializing Map*/
 //    mapboxgl.accessToken = 'pk.eyJ1IjoiZGx2aXZhbmNvIiwiYSI6ImNqMzBjY3ZpcTAwMWcycXBnN251b3M0Z2IifQ.qhYk3raWsVyuhbMvr1B4LA';
 //    this.map = new mapboxgl.Map({
 //       style: 'mapbox://styles/mapbox/streets-v9',
 //       center: [this.Coordinates.longitude, this.Coordinates.latitude],
 //       minZoom: 12,
 //       container: 'map'
 //     });
 //
 //   this.map.on('load', function() {
 //   this.map.addLayer({
 //    'id': '3d-buildings',
 //    'source': 'composite',
 //    'source-layer': 'building',
 //    'filter': ['==', 'extrude', 'true'],
 //    'type': 'fill-extrusion',
 //    'maxzoom': 15,
 //    'paint': {
 //     'fill-extrusion-color': '#aaa',
 //     'fill-extrusion-height': {
 //      'type': 'identity',
 //      'property': 'height'
 //     },
 //     'fill-extrusion-base': {
 //      'type': 'identity',
 //      'property': 'min_height'
 //     },
 //     'fill-extrusion-opacity': .6
 //    }
 //   });
 //  });
 // }




 // GOOGLE MAPS
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
