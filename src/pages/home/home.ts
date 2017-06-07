import { Component } from '@angular/core';
import { NavController, Platform, NavParams, Events } from 'ionic-angular';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import { ParadasMapa } from '../../providers/paradas-mapa';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  paradasConsultadas: any;
  paradas: any;
  keyword: any;
  results: any;
  information: any;
  publicKey: any;
  encrypted: any;
  encodedData: any;
  response: any;
  isSearching: any;


  constructor(public navCtrl: NavController,
              public http: Http,
              public storage: Storage,
              public paradasMapaService: ParadasMapa,
              public navParams: NavParams,
              protected platform: Platform,
              public events: Events) {
    this.paradasConsultadas = [];
    this.paradas = this.paradasMapaService.generateLoadParadas().stops;
    console.log(this.paradas);
    this.results = [];
    this.information = [];
    this.keyword = '';
    this.response = '';
    this.getAllItems();
    this.isSearching = true;

    events.subscribe('getid', (id: string) => {
      this.paradas = this.paradasMapaService.generateLoadParadas().stops;
      this.getResultEvent(id);
    });
  }

  getResultEvent(id: string){
    this.keyword = id;
    this.isSearching = false;
    const results: any[] = this.paradas.filter((item) => item.numeroParada === id);
    if (results) {
      this.getInformation(results[0]);
    }
  }

  userPressedCancel() {
    this.results = this.paradas;
    this.keyword = '';
  }

  keyHasBeedPressed(e) {
    if (this.keyword === '') {
      this.results = [];
      this.information = [];
    } else {
      this.isSearching = false;
      this.results = this.paradas.filter((item) => 
        item.numeroParada.toLowerCase().includes(this.keyword.toLowerCase()) ||
        item.nombreParada.toLowerCase().includes(this.keyword.toLowerCase()));
    }
  }

  getInformation(result: any) {
    this.information = result;
    this.setData(result);
    this.results = [];
  }

  setData(result: any) {
    this.storage.set(this.keyword, result.nombreParada);
    this.paradasConsultadas = [];
    this.getAllItems();
  }

  getData() {
    this.storage.get('myData').then((data) => {
    });
  }

  removeData(index: any) {
    this.storage.remove(index);
    this.paradasConsultadas = [];
    this.getAllItems();
  }

  getAllItems() {
    this.storage.ready().then(() => {
      this.storage.forEach((value, key, index) => {
        this.paradasConsultadas.push({
          id: index,
          name: value,
          index: key,
        })
      });
    });
  }
}
