import { Component, ViewChild } from '@angular/core';
import { NavController, ModalController, ActionSheetController, Events } from 'ionic-angular'; //ActionSheetController
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { ParadasMapa } from '../../providers/paradas-mapa';
import { HomePage } from '../home/home';

import L from 'leaflet';
import 'leaflet.markercluster';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';

import * as jQuery  from 'jquery'

const provider = new OpenStreetMapProvider();

const searchControl = new GeoSearchControl({
  provider: provider,
  autoClose: true,
  searchLabel: 'Escribe tu dirección'   // optional: true|false  - default false
});

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
  paradasGeneradas;
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
    this.paradasGeneradas = this.paradasMapaService.generateLoadParadas();
    console.log(this.paradasGeneradas);
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
      zoom: 14,
      accessToken: 'pk.eyJ1IjoiZGx2aXZhbmNvIiwiYSI6ImNqMzBjY3ZpcTAwMWcycXBnN251b3M0Z2IifQ.qhYk3raWsVyuhbMvr1B4LA'
    }).addTo(this.map);
    this.showMarkers();
    this.map.addControl(searchControl);

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
