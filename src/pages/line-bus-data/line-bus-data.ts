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
  selectedLine;
  routes;
  frequencies;
  frequenciesForward;
  frequenciesBack;
  routesLength;
  shownGroupForward;
  shownGroupBack;
  map;

  constructor(public navCtrl: NavController,
          public navParams: NavParams,
          public events: Events) {
      this.tab1Params = [];
      this.tab2Params = [];
      this.selectedLine = [];
      this.routes = [];
      this.frequencies = [];
      this.frequenciesForward = [];
      this.frequenciesBack = [];
      this.routesLength = 0;
      this.shownGroupForward = null;
      this.shownGroupBack = null;


      this.events.subscribe('getlinea', (trayecto) => {
          this.selectedLine = trayecto;
          this.tab1Params = trayecto;
          this.tab2Params = trayecto;

          this.routes = this.selectedLine.recorridoCircular;
        });
    }

  toggleGroupForward(group: any){
    if(this.routes[group].frequencies.length === 0){

      this.frequenciesForward = [];
    }else{
      this.frequenciesForward = this.routes[group].frequencies;
    }
      console.log(group);
      console.log(this.frequencies);
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
    if(this.routes[group].frequencies.length === 0){

      this.frequenciesBack = [];
    }
    else{
      this.frequenciesBack = this.routes[group].frequencies;
    }
      console.log(group);
      console.log(this.frequencies);
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
