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
	frecuencias;
	trayectosLength;
	shownGroupForward;
	shownGroupBack;

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
  			  public events: Events) {
  		this.lineaSeleccionada = [];
  		this.trayectos = [];
  		this.frecuencias = []
  		this.trayectosLength = 0;
  		this.shownGroupForward = null;
  		this.shownGroupBack = null;

    	this.events.subscribe('getlinea', (linea) => {
    		this.lineaSeleccionada = linea;

    		this.trayectos = this.lineaSeleccionada.trayectos;
    	    this.trayectosLength = Object.keys(this.trayectos).length

    });


    }

    toggleGroupForward(group: any){
    	this.frecuencias = this.trayectos[group].frecuencias[0];
    	console.log(group)
    	console.log(this.frecuencias)
    	if(this.isGroupShownForward(group)){
    		this.shownGroupForward = null;
    	}else {
    		this.shownGroupForward = group;
    	}
    }

	isGroupShownForward(group: any){
		return this.shownGroupForward === group;

	}

	toggleGroupBack(group: any){
		this.frecuencias = this.trayectos[group].frecuencias[1];
    	console.log(group)
    	console.log(this.frecuencias)
    	if(this.isGroupShownBack(group)){
    		this.shownGroupBack = null;
    	}else {
    		this.shownGroupBack = group;
    	}
    }

	isGroupShownBack(group: any){
		return this.shownGroupBack === group;

	}

}
