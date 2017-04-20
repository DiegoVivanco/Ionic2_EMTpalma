import { Component, ViewChild, NgZone } from '@angular/core';
import { NavController, ModalController  } from 'ionic-angular'; //ActionSheetController
import { GoogleMap, GoogleMapsLatLng } from 'ionic-native';
import {
 GoogleMaps,
 GoogleMapsEvent,
 LatLng,
 CameraPosition,
 MarkerOptions,
 Marker
} from '@ionic-native/google-maps';

import { googlemaps } from 'googlemaps';
//import * as $ from 'jquery';

@Component({
  selector: 'page-stops',
  templateUrl: 'stops.html'
})
export class StopsPage {
  @ViewChild('map') mapElement;
   map: any;
   infoWindows: any;
  constructor(
    public navCtrl: NavController, 
    public modalCtrl: ModalController, 
   // public actionSheetCtrl: ActionSheetController
  ) {
    this.infoWindows = [];
  }

  addInfoWindowToMarker(marker) {
    var infoWindowContent = '<div id="content">' +
        '<h1 id="firstHeading" class="firstHeading">' +
             marker.title + 
         '</h1>' +
          '<p align="center"><button id="x"> Click Me! </button></p>' +
         '</div>';

    var infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent
    });

    /*infoWindow.addListener('domready', () => {
        var cancel = document.getElementById("x");

        cancel.addEventListener("click", () =>{
            console.log("hello");
        });
    });*/

    marker.addListener('click', () => {
      this.closeAllInfoWindows();
      infoWindow.open(this.map, marker);
    });
    this.infoWindows.push(infoWindow);
  }



  closeAllInfoWindows() {
    for(let window of this.infoWindows) {
      window.close();
    }
  }
  
  ionViewDidLoad(){
  	this.initMap();
  }

  initMap(){
  	let latLng = new google.maps.LatLng(39.5830906, 2.6540206);

  	let mapOptions = {
  		center: latLng,
  		zoom: 12,
  		mapTypeId: google.maps.MapTypeId.ROADMAP
  	};

  	this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    let marker = new google.maps.Marker({
      position: new google.maps.LatLng(39.5748641, 2.6449896),
      map: this.map,
      title: 'test sobre marks map'
    });

    marker.setMap(this.map);
    this.addInfoWindowToMarker(marker);

    google.maps.event.addListener(this.map, "click", () => {
      this.closeAllInfoWindows();

      });

    /*google.maps.event.addListener(marker, "click", () => {
      this.presentActionSheet();

      });*/


    }


  /* presentActionSheet() {
     let actionSheet = this.actionSheetCtrl.create({
       title: 'Modify your album',
       buttons: [
         {
           text: 'Destructive',
           role: 'destructive',
           handler: () => {
             console.log('Destructive clicked');
           }
         },
         {
           text: 'Archive',
           handler: () => {
             console.log('Archive clicked');
           }
         },
         {
           text: 'Cancel',
           role: 'cancel',
           handler: () => {
             console.log('Cancel clicked');
           }
         }
       ]
     });

     actionSheet.present();
 } */


}
    
  /*   
  google.maps.event.addListenerOnce(this.infoWindows, '**domready**', () => { 
      var Cancel = document.getElementById("x");

      google.maps.event.addDomListener(Cancel,"click",function() {
          console.log("hello");
      });
    }); 
     */