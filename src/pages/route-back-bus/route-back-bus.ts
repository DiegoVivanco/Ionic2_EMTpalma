import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
declare let google;
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

  @ViewChild('mapBack') mapElement;
  mapBack;
  showMap: any;
  hideFabMap: any;
  hideFapRoute: any;
  rutaSeleccionada;
  frecuenciasBack;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rutaSeleccionada = navParams.data;
    this.frecuenciasBack = this.rutaSeleccionada.frecuencias;
    this.showMap = false;
    this.hideFabMap = false;
    this.hideFapRoute = true;
    console.log(this.frecuenciasBack);
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
    let latLngTwo = new google.maps.LatLng(39.5830906, 2.6540206);

   let mapOptionsTwo = {
      center: latLngTwo,
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

   this.mapBack = new google.maps.Map(this.mapElement.nativeElement, mapOptionsTwo);

 }

}