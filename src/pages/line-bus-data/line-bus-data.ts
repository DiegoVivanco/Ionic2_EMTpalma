import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { RouteForwardBus } from '../route-forward-bus/route-forward-bus';
import { RouteBackBus } from '../route-back-bus/route-back-bus';
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

  tab1Root = RouteForwardBus;
  tab2Root = RouteBackBus;
  tab1Params;
  tab2Params;
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
      this.tab1Params = [];
      this.tab2Params = [];
      this.lineaSeleccionada = [];
      this.trayectos = [];
      this.frecuencias = [];
      this.frecuenciasForward = [];
      this.frecuenciasBack = [];
      this.trayectosLength = 0;
      this.shownGroupForward = null;
      this.shownGroupBack = null;


      this.events.subscribe('getlinea', (trayecto) => {
          this.lineaSeleccionada = trayecto;
          this.tab1Params = trayecto;
          this.tab2Params = trayecto;

          this.trayectos = this.lineaSeleccionada.recorridoCircular;
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
}