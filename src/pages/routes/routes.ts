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


  constructor(public navCtrl: NavController,
              public nav: Nav,
  			      public lineasService : Lineas,
              public events: Events) {

  	this.lineas = this.lineasService.loadLineas()[0];
    this.lineas = Object.keys(this.lineas).map(key => this.lineas[key]);
    this.lineBusData = LineBusData;


  }


  goToDetails(linea: any){
    this.navCtrl.push(this.lineBusData, linea).then(()=>{
      this.events.publish('getlinea', linea)
    });
  }
}

