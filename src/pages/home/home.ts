import { Component } from '@angular/core';
import { NavController, Platform, Events } from 'ionic-angular';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import { ParadasMapa } from '../../providers/paradas-mapa';
import * as moment from 'moment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  consultedStops: any;
  stops: any;
  keyword: any;
  results: any;
  information: any;
  isSearching: any;
  currentDate: any;


  constructor(public navCtrl: NavController,
              public http: Http,
              public storage: Storage,
              public stopsMapaService: ParadasMapa,
              protected platform: Platform,
              public events: Events) {
    this.consultedStops = [];
    this.stops = this.stopsMapaService.generateLoadStops().stops;
    this.results = [];
    this.information = [];
    this.keyword = '';
    this.getAllItems();
    this.isSearching = true;
    this.currentDate = moment().locale('es').format('MMMM Do YYYY, h:mm:ss');

    events.subscribe('getid', (id: string) => {
      this.stops = this.stopsMapaService.generateLoadStops().stops;
      this.getResultEvent(id);
    });
  }

  doRefresh(refresher) {
    this.stops = this.stopsMapaService.generateLoadStops().stops;

    setTimeout(() => {
      this.currentDate = moment().locale('es').format('MMMM Do YYYY, h:mm:ss');
      this.getResultEvent(this.keyword);
      refresher.complete();
    }, 2000);
  }

  getResultEvent(id: string){
    this.keyword = id;
    this.isSearching = false;
    const results: any[] = this.stops.filter((item) => item.numeroParada === id);
    if (results) {
      this.getInformation(results[0]);
    }
  }

  userPressedCancel() {
    this.results = this.stops;
    this.keyword = '';
  }

  keyHasBeedPressed() {
    if (this.keyword === '') {
      this.results = [];
      this.information = [];
    } else {
      this.isSearching = false;
      this.results = this.stops.filter((item) =>
        item.numeroParada.toLowerCase().includes(this.keyword.toLowerCase()) ||
        item.nombreParada.toLowerCase().includes(this.keyword.toLowerCase()));
    }
  }

  getInformation(result: any) {
    this.keyword = result.numeroParada;
    this.information = result;
    this.setData(result);
    this.results = [];
  }

  setData(result: any) {
    this.storage.set(this.keyword, result.nombreParada);
    this.consultedStops = [];
    this.getAllItems();
  }

  removeData(index: any) {
    this.storage.remove(index);
    this.consultedStops = [];
    this.getAllItems();
  }

  getAllItems() {
    this.storage.ready().then(() => {
      this.storage.forEach((value, key, index) => {
        this.consultedStops.push({
          id: index,
          name: value,
          index: key,
        })
      });
    });
  }
}
