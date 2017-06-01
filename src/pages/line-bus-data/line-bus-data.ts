import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

/**
 * Generated class for the LineBusData page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-line-bus-data',
  templateUrl: 'line-bus-data.html',
})
export class LineBusData {

	lineaSeleccionada;
	trayectos;
	trayectosLength;

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
  			  public events: Events) {
  		this.lineaSeleccionada = [];
  		this.trayectos = [];
  		this.trayectosLength = 0;

    	this.events.subscribe('getlinea', (linea) => {
    		this.lineaSeleccionada = linea;

    		this.trayectos = this.lineaSeleccionada.trayectos;
    	    this.trayectosLength = Object.keys(this.trayectos).length

    });


    }

}
