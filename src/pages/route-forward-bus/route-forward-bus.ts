import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ParadasMapa } from '../../providers/paradas-mapa';

/**
 * Generated class for the RouteForwardBus page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-route-forward-bus',
  templateUrl: 'route-forward-bus.html',
})
export class RouteForwardBus {

  mapForward;
  showMap: any;
  hideFabMap: any;
  hideFapRoute: any;
  routeSelected;
  frequenciesForward;
  stopsLineForwardList;
  stopsNamesLineForwardList;  
  routeMapForward: any;
  paradasMapa: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public paradasMapaService: ParadasMapa) {

    this.routeSelected = navParams.data;
    this.frequenciesForward = this.routeSelected.frecuencias;
    this.routeMapForward = this.routeSelected.recorridoIda;
    this.stopsLineForwardList = this.routeSelected.ida;
    this.paradasMapa = this.paradasMapaService.loadParadasMapa()[0];
    this.stopsNamesLineForwardList = this.getRouteForwardCoordsList();
    this.showMap = false;
    this.hideFabMap = false;
    this.hideFapRoute = true;
     setTimeout(() => {
      this.changeColorTimeLine();
    }, 200);
  }

  changeColorTimeLine(){
    let elements = <HTMLElement[]><any>document.querySelectorAll('.royal');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.borderColor = this.routeSelected.colorfuerte;
    }
  }
  
  showMapForward(){
      this.showMap = true;
      this.hideFabMap = true;
      this.hideFapRoute = false;
      setTimeout(() => {
        this.mapRouteForward();
      }, 300);
    }

   showRouteForward(){
      this.showMap = false;
      this.hideFabMap = false;
      this.hideFapRoute = true;
   }

   mapRouteForward(){
     this.mapForward = L.map('mapForward').setView([39.5748641, 2.6449896], 13);

     L.tileLayer('https://api.tiles.mapbox.com/v4/mapbox.streets-basic/{z}/{x}/{y}.png?access_token={accessToken}', {
       zoom: 13,
       accessToken: 'pk.eyJ1IjoiZGx2aXZhbmNvIiwiYSI6ImNqMzBjY3ZpcTAwMWcycXBnN251b3M0Z2IifQ.qhYk3raWsVyuhbMvr1B4LA'
     }).addTo(this.mapForward);

     L.polyline(this.routeMapForward).addTo(this.mapForward);
     let routeForwardCoordList = this.getRouteForwardCoordsList();
     this.showMarkersForward(routeForwardCoordList);
   }

   getRouteForwardCoordsList(){
    let result = this.routeSelected.ida
       .map(String)
       .map((stopTmp: string) => this.paradasMapa[stopTmp]);

    return result;
   }

   showMarkersForward(routeForwardCoordList) {
     let numberStopList = this.routeSelected.ida;
     for (let key in routeForwardCoordList) {
       if (routeForwardCoordList[key][0] !== null) {
         let busIcon = new L.DivIcon({
           className: 'myDivIcon',
           html: '<img class="myDivImage" src="assets/img/bus2.png"/>' +
           '<div class="myDivNumber">' + numberStopList[key] + '</div>'
         });

         L.marker([routeForwardCoordList[key][0], routeForwardCoordList[key][1]], {icon: busIcon})
           .addTo(this.mapForward);
       }
     }
   }

}