import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ParadasMapa } from '../../providers/paradas-mapa';

/**
 * Generated class for the RouteBackBus page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-route-back-bus',
  templateUrl: 'route-back-bus.html',
})
export class RouteBackBus {

  mapBack;
  showMap: any;
  hideFabMap: any;
  hideFapRoute: any;
  routeSelected;
  frequenciesBack;
  routeMapBack: any;
  paradasMapa: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public paradasMapaService: ParadasMapa) {

    this.routeSelected = navParams.data;
    this.frequenciesBack = this.routeSelected.frecuencias;
    this.routeMapBack = this.routeSelected.recorridoIda;
    this.paradasMapa = this.paradasMapaService.loadParadasMapa()[0];
    this.showMap = false;
    this.hideFabMap = false;
    this.hideFapRoute = true;
  }

  showMapBack(){
    this.showMap = true;
    this.hideFabMap = true;
    this.hideFapRoute = false;
    setTimeout(() => {
      this.mapRouteBack();
    }, 300);
  }

  showRouteBack(){
    this.showMap = false;
    this.hideFabMap = false;
    this.hideFapRoute = true;
  }

   mapRouteBack(){
     this.mapBack = L.map('mapBack').setView([39.5748641, 2.6449896], 13);

     L.tileLayer('https://api.tiles.mapbox.com/v4/mapbox.streets-basic/{z}/{x}/{y}.png?access_token={accessToken}', {
       zoom: 13,
       accessToken: 'pk.eyJ1IjoiZGx2aXZhbmNvIiwiYSI6ImNqMzBjY3ZpcTAwMWcycXBnN251b3M0Z2IifQ.qhYk3raWsVyuhbMvr1B4LA'
     }).addTo(this.mapBack);

     L.polyline(this.routeMapBack).addTo(this.mapBack);
     let routeBackCoordList = this.getRouteBackCoordsList();
     this.showMarkersBack(routeBackCoordList);
 }

  getRouteBackCoordsList(){
    let result = this.routeSelected.vuelta
      .map(String)
      .map((stopTmp: string) => this.paradasMapa[stopTmp]);

    return result;
  }

  showMarkersBack(routeBackCoordList) {
    let numberStopList = this.routeSelected.vuelta;
    for (let key in routeBackCoordList) {
      if (routeBackCoordList[key][0] !== null) {
        let busIcon = new L.DivIcon({
          className: 'myDivIcon',
          html: '<img class="myDivImage" src="assets/img/bus2.png"/>' +
          '<div class="myDivNumber">' + numberStopList[key] + '</div>'
        });

        L.marker([routeBackCoordList[key][0], routeBackCoordList[key][1]], {icon: busIcon})
          .addTo(this.mapBack);
      }
    }
  }

}