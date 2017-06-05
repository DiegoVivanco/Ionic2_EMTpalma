import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  }

  showRouteBack(){
    this.showMap = false;
    this.hideFabMap = false;
    this.hideFapRoute = true;

  }

}