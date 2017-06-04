import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

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
  
  lineaSeleccionada;


  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
  	this.lineaSeleccionada = navParams.data;
    console.log(this.lineaSeleccionada);

    /*this.events.subscribe('getRouteForward', (trayecto) => {
          this.lineaSeleccionada = trayecto;
          console.log("hola soy yo:");
          console.log(this.lineaSeleccionada);

          //this.trayectos = this.lineaSeleccionada.recorridoCircular;
          //this.trayectosLength = Object.keys(this.trayectos).length

    });*/
  }


}
