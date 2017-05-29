import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Lineas provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Lineas {

	lineas: any;

  constructor(public http: Http) {}

  loadLineas(){
  	return [
  		{
  		 "linea": 1,
  		 "nombreLinea": "Aeroport-Ciutat-Port",
  		 "color": "rgb(68, 116, 63)",
  		},
  		{
  		 "linea": 2,
  		 "nombreLinea": "Circumval-lació Centre Històtic",
  		 "color": "rgb(183, 141, 186)",
  		},
  		{
  		 "linea": 3,
  		 "nombreLinea": "Pont d'inca - Illetes",
  		 "color": "rgb(244, 91, 164)",
  		},
  		{
  		 "linea": 5,
  		 "nombreLinea": "Es Rafal Nou-Son Dureta",
  		 "color": "rgb(114, 192, 216)",
  		},
  		{
  		 "linea": 6,
  		 "nombreLinea": "Nou Llevant - Son Espases",
  		 "color": "rgb(79, 109, 94)",
  		},
  		{
  		 "linea": 7,
  		 "nombreLinea": "Son Rapinya - Son Gotleu",
  		 "color": "rgb(73, 156, 117)",
  		},
  		{
  		 "linea": 8,
  		 "nombreLinea": "Son roca",
  		 "color": "rgb(78, 67, 177)",
  		},
  		{
  		 "linea": 9,
  		 "nombreLinea": "Son Espanyol",
  		 "color": "rgb(171, 71, 143)",
  		},
  		{
  		 "linea": 10,
  		 "nombreLinea": "Son Cladera - Sa Indioteria",
  		 "color": "rgb(98, 62, 90)",
  		},
  		{
  		 "linea": 11,
  		 "nombreLinea": "Sa Indioteria",
  		 "color": "rgb(243, 219, 120)",
  		},
  		{
  		 "linea": 12,
  		 "nombreLinea": "Son Sardina - Nou Llevant",
  		 "color": "rgb(241, 181, 67)",
  		},
  		{
  		 "linea": 14,
  		 "nombreLinea": "Son Ferriol",
  		 "color": "rgb(97, 115, 199)",
  		},
  		{
  		 "linea": 15,
  		 "nombreLinea": "Platja de Palma - Plaça de la Reina",
  		 "color": "rgb(36, 116, 204)",
  		},
  		{
  		 "linea": 16,
  		 "nombreLinea": "Establiments - Son Fuster",
  		 "color": "rgb(84, 150, 175)",
  		},
  		{
  		 "linea": 18,
  		 "nombreLinea": "Son Riera",
  		 "color": "rgb(113, 98, 64)",
  		},
  		{
  		 "linea": 19,
  		 "nombreLinea": "Universitat",
  		 "color": "rgb(94, 165, 50)",
  		},
  		{
  		 "linea": 20,
  		 "nombreLinea": "Sant Agustí - Son Espases",
  		 "color": "rgb(222, 84, 78)",
  		},
  		{
  		 "linea": 21,
  		 "nombreLinea": "S'Arenal - Aeroport",
  		 "color": "rgb(108, 0, 7)",
  		},
  		{
  		 "linea": 23,
  		 "nombreLinea": "Palma - S'Arenal - Cala Brava",
  		 "color": "rgb(179, 150, 51)",
  		},
  		{
  		 "linea": 24,
  		 "nombreLinea": "Son Llàtzer - Son Hugo",
  		 "color": "rgb(96, 86, 119)",
  		},
  		{
  		 "linea": 25,
  		 "nombreLinea": "Platja de Palma Exprés",
  		 "color": "rgb(102, 102, 102)",
  		},
  		{
  		 "linea": 28,
  		 "nombreLinea": "Son Llàtzer Circular",
  		 "color": "rgb(233, 160, 200)",
  		},
  		{
  		 "linea": 29,
  		 "nombreLinea": "Circular Son Espases",
  		 "color": "rgb(196, 166, 149)",
  		},
  		{
  		 "linea": 30,
  		 "nombreLinea": "Sant Joan de Dèu",
  		 "color": "rgb(160, 69, 65)",
  		},
  		{
  		 "linea": 31,
  		 "nombreLinea": "Palma - Sant Jordi - S'Arenal",
  		 "color": "rgb(211, 221, 125)",
  		},
  		{
  		 "linea": 33,
  		 "nombreLinea": "Son Espases",
  		 "color": "rgb(104, 121, 129)",
  		},
  		{
  		 "linea": 34,
  		 "nombreLinea": "Son Espases - Es Rafal",
  		 "color": "rgb(150, 150, 145)",
  		},
  		{
  		 "linea": 41,
  		 "nombreLinea": "Bus de nit",
  		 "color": "rgb(245, 142, 73)",
  		},
  		{
  		 "linea": 46,
  		 "nombreLinea": "Gènova - Sant Agustí - Palma",
  		 "color": "rgb(238, 170, 96)",
  		},
  		]
  }

}
