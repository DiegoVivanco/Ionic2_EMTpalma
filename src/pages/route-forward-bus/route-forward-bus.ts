import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
declare let google;
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

  @ViewChild('mapForward') mapElement;
  map;
  showMap: any;
  hideFabMap: any;
  hideFapRoute: any;
  rutaSeleccionada;
  frecuenciasForward;

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
    this.rutaSeleccionada = navParams.data;
    this.frecuenciasForward = this.rutaSeleccionada.frecuencias;
    this.showMap = false;
    this.hideFabMap = false;
    this.hideFapRoute = true;
    console.log(this.frecuenciasForward);

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
    let latLng = new google.maps.LatLng(39.5830906, 2.6540206);

   let mapOptions = {
      center: latLng,
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

   this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

 }
}