import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import * as $ from 'jquery';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	keyword: any;
	results: any;


  constructor(public navCtrl: NavController, public http: Http) {
  	  this.results = [];
  		this.keyword = '';

  }

  keyHasBeedPressed(){

      this.http.get('https://itunes.apple.com/search?term='
        +this.keyword
        ).subscribe((response) => {
          this.results = response.json().results;
        });
  }

}
