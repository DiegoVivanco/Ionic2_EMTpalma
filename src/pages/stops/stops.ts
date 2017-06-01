import { Component, ViewChild } from '@angular/core';
import { NavController, ModalController, ActionSheetController, Events } from 'ionic-angular'; //ActionSheetController
//import { GoogleMap, GoogleMapsLatLng } from 'ionic-native';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { ParadasMapa } from '../../providers/paradas-mapa';
import { HomePage } from '../home/home';
//import { Nav, Platform } from 'ionic-angular';


import L from 'leaflet';
import 'leaflet.markercluster';

//import { googlemaps } from 'googlemaps';
//import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'
import * as jQuery  from 'jquery'


@Component({
  selector: 'page-stops',
  templateUrl: 'stops.html'
})
export class StopsPage {
  cluster;
  @ViewChild('map') mapElement;
  Coordinates: any;
  watch:any;
  paradasMapa;
  tab1Root;
  marker;
  map;


  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public paradasMapaService: ParadasMapa,
    private geolocation: Geolocation,
    public actionSheetCtrl: ActionSheetController,
    public events: Events)
  {
    this.cluster = L.markerClusterGroup();
    this.paradasMapa = this.paradasMapaService.loadParadasMapa()[0];
    this.tab1Root = HomePage;
  }

  ionViewDidLoad() {
    /*Initializing geolocation*/
    let options = { frequency: 3000, enableHighAccuracy: true };

    this.watch = this.geolocation.watchPosition(options)
      .subscribe((position: Geoposition) => {
        this.Coordinates = position.coords;
      });

  }

  ngOnInit(): void {
    this.map = L.map('map').setView([39.5748641, 2.6449896], 14);

    L.tileLayer('https://api.tiles.mapbox.com/v4/mapbox.streets-basic/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      zoom: 14,
      accessToken: 'pk.eyJ1IjoiZGx2aXZhbmNvIiwiYSI6ImNqMzBjY3ZpcTAwMWcycXBnN251b3M0Z2IifQ.qhYk3raWsVyuhbMvr1B4LA'
    }).addTo(this.map);
    this.showMarkers();

    const self = <StopsPage> this;
    jQuery('#map').on('click', '.selectCoords', function(e) {
      self.navCtrl.parent.select(0);
      self.events.publish('getid', e.target.id);
    });

  }



  showMarkers(){
    for (var key in this.paradasMapa) {
      if(this.paradasMapa[key][0] !== null){
        let busIcon =  new L.DivIcon({
          className: 'myDivIcon',
          html: '<img class="myDivImage" src="assets/img/bus2.png"/>'+
          '<div class="myDivNumber">'+key+'</div>'
        });

        let popupLink=  '<div>' +
          '<p class="name"> '+key+' - '+this.paradasMapa[key][2]+'</p>' +

          '<span class="routeList small">' +

          '<a class="lineaNum" style="cursor: pointer; background-color: rgb(114, 192, 216);">5</a>' +

          '<a class="lineaNum" style="cursor: pointer; background-color: rgb(238, 170, 96);">46</a>' +

          '</span>' +

          '<button class="selectCoords" id="'+key+'">Seleccionar</button>' +
          '</div>';
        this.marker = L.marker([this.paradasMapa[key][0], this.paradasMapa[key][1]], {icon: busIcon}).bindPopup(popupLink);
        this.cluster.addLayer(this.marker);
      }
    };

    this.map.addLayer(this.cluster);
  }
}


//   openPropertyDetail(property: any){
//     console.log(this.marker.getPopup());
//     console.log(property);
//         let actionSheet = this.actionSheetCtrl.create({
//         title: 'Parada ' + property.numeroParada + ' - ' + property.nombreParada,
//         buttons: [
//           {
//             text: 'Paso por parada',
//             icon: 'bus',
//             role: 'Paso por parada',
//             handler: () => {
//               console.log('Destructive clicked');
//             }
//           },
//           {
//             text: 'Añadir a favoritos',
//             icon: 'star',
//             handler: () => {
//               console.log('Archive clicked');
//             }
//           },
//           {
//             text: 'Cancelar',
//             icon: 'close',
//             role: 'Cancelar',
//             handler: () => {
//               this.closePopUp();
//             }
//           }
//         ]
//       });
//
//       actionSheet.present();
//   }
//
//
// closePopUp(){
//   console.log('Cancel clicked');
//   if(jQuery(".leaflet-popup-close-button")){
//       jQuery(".leaflet-popup-close-button")[0].click();
//     }
// }


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
//}
