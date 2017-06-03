import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
//import * as jqueryUI  from 'jquery-ui'

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
  frecuenciasForward;
  frecuenciasBack;
	trayectosLength;
	shownGroupForward;
	shownGroupBack;
  map;

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
  			  public events: Events) {
  		this.lineaSeleccionada = [];
  		this.trayectos = [];
  		this.frecuencias = []
      this.frecuenciasForward = [];
      this.frecuenciasBack = [];
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
    if(this.trayectos[group].frecuencias.length === 0){
      
      this.frecuenciasForward = [];
    }else{
      this.frecuenciasForward = this.trayectos[group].frecuencias;
    }
      console.log(group)
    	console.log(this.frecuencias)
    	if(this.isGroupShownForward(group)){
    		this.shownGroupForward = null;
    	}else {
    		this.shownGroupForward = group;
    	}

   //   this.createMap();
    }

	isGroupShownForward(group: any){
		return this.shownGroupForward === group;

	}

	toggleGroupBack(group: any){
    if(this.trayectos[group].frecuencias.length === 0){

      this.frecuenciasBack = [];
    }
    else{
      this.frecuenciasBack = this.trayectos[group].frecuencias;
    }
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

  createMap(){
    this.map = L.map('leafletmap').setView([39.5748641, 2.6449896], 14);

    L.tileLayer('https://api.tiles.mapbox.com/v4/mapbox.streets-basic/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      zoom: 14,
      accessToken: 'pk.eyJ1IjoiZGx2aXZhbmNvIiwiYSI6ImNqMzBjY3ZpcTAwMWcycXBnN251b3M0Z2IifQ.qhYk3raWsVyuhbMvr1B4LA'
    }).addTo(this.map);
  }

}
