import { Component, ViewChild } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
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
  searchLabel: 'Escribe tu dirección'
});

@Component({
  selector: 'page-stops',
  templateUrl: 'stops.html'
})
export class StopsPage {
  cluster;
  @ViewChild('map') mapElement;
  watch:any;
  stopsMap;
  stopsGenerated;
  tab1Root;
  marker;
  map;

  constructor(
    public navCtrl: NavController,
    public stopsMapService: ParadasMapa,
    public events: Events)
  {
    this.cluster = L.markerClusterGroup();
    this.stopsMap = this.stopsMapService.loadStopsMap()[0];
    this.stopsGenerated = this.stopsMapService.generateLoadStops();
    console.log(this.stopsGenerated);
    this.tab1Root = HomePage;
  }

  ngOnInit(): void {
    this.map = L.map('map').setView([39.5748641, 2.6449896], 14);

    L.tileLayer('https://api.tiles.mapbox.com/v4/mapbox.streets-basic/{z}/{x}/{y}.png?access_token={accessToken}', {
      zoom: 14,
      accessToken: 'pk.eyJ1IjoiZGx2aXZhbmNvIiwiYSI6ImNqMzBjY3ZpcTAwMWcycXBnN251b3M0Z2IifQ.qhYk3raWsVyuhbMvr1B4LA'
    }).addTo(this.map);
    this.map.addControl(searchControl);

    this.map.locate({setView: true, maxZoom: 16});

    const selfMap = <StopsPage> this;
    function onLocationFound(e) {
      let iconMap =  new L.DivIcon({
        className: 'myDivIcon',
        html: '<img class="myImage" src="assets/img/iconMap.svg"/>'});

      let radius = e.accuracy / 2;

      L.marker(e.latlng, {icon: iconMap} ).addTo(selfMap.map)
        .bindPopup("Tú estas aquí").openPopup();

      L.circle(e.latlng, radius).addTo(selfMap.map);
    }

    this.map.on('locationfound', onLocationFound);

    function onLocationError(e) {
      alert("Geolocation desactivada");
    }

    this.map.on('locationerror', onLocationError);

    this.showMarkers();

    const self = <StopsPage> this;
    jQuery('#map').on('click', '.selectCoords', function(e) {
      self.navCtrl.parent.select(0);
      self.events.publish('getid', e.target.id);
    });
  }

  showMarkers(){
    for (let key in this.stopsMap) {
      if(this.stopsMap[key][0] !== null){
        let busIcon =  new L.DivIcon({
          className: 'myDivIcon',
          html: '<img class="myDivImage" src="assets/img/bus2.png"/>'+
          '<div class="myDivNumber">'+key+'</div>'
        });

        let popupLink=  '<div>' +
          '<p class="name"> '+key+' - '+this.stopsMap[key][2]+'</p>' +

          '<span class="routeList small">' +

          '<a class="lineaNum" style="cursor: pointer; background-color: rgb(114, 192, 216);">5</a>' +

          '<a class="lineaNum" style="cursor: pointer; background-color: rgb(238, 170, 96);">46</a>' +

          '</span>' +

          '<button class="selectCoords" id="'+key+'">Seleccionar</button>' +
          '</div>';
        this.marker = L.marker([this.stopsMap[key][0], this.stopsMap[key][1]], {icon: busIcon}).bindPopup(popupLink);
        this.cluster.addLayer(this.marker);
      }
    };

    this.map.addLayer(this.cluster);
  }
}
