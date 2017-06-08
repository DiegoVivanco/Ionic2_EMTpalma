import { Component } from '@angular/core';
import { NavController, Nav, Events } from 'ionic-angular';
import { Lineas } from '../../providers/lineas';
import { LineBusData } from '../line-bus-data/line-bus-data'


@Component({
  selector: 'page-routes',
  templateUrl: 'routes.html'
})
export class RoutesPage {

  lineas;
  lineBusData = LineBusData;
  trayectos;
  trayectosLength;
  shownGroup;


  constructor(public navCtrl: NavController,
              public nav: Nav,
              public lineasService : Lineas,
              public events: Events) {

    this.lineas = this.lineasService.loadLineas()[0];
    this.lineas = Object.keys(this.lineas).map(key => this.lineas[key]);
    this.lineBusData = LineBusData;
    this.trayectos= [];
    this.trayectosLength = 0;
    this.shownGroup = null;


  }


  showRoutesDetails(linea: any){
    this.trayectos = linea.trayectos;
    this.trayectosLength = Object.keys(this.trayectos).length
    console.log(this.trayectosLength);

    /*this.navCtrl.push(this.lineBusData, linea).then(()=>{
      this.events.publish('getlinea', linea)
    });*/
  }

  toggleGroup(group: any, linea: any){

      this.showRoutesDetails(linea);

      if(this.isGroupShown(group)){
        this.shownGroup = null;
      }else {
        this.shownGroup = group;
      }
    }

  isGroupShown(group: any){
    return this.shownGroup === group;

  }

  goToRoute(event: any, trayecto: any){
    event.stopPropagation();
    console.log(trayecto);

    this.navCtrl.push(this.lineBusData, trayecto).then(()=>{
      this.events.publish('getlinea', trayecto);
      //this.events.publish('getRouteForward', trayecto);
     // this.events.publish('getRouteBack', trayecto);
    });


  }

}

