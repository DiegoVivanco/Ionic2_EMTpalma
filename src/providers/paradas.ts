import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Paradas provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Paradas {

  paradas: any;

  constructor(public http: Http) {}

	loadParadas(){
    return [
        {
          "numeroParada": "1", 
          "nombreParada": "Porta de Sant Antoni",
          "longitud": "2.6545994",
          "latitud": "39.5717899"
        },
        {
          "numeroParada": "2", 
          "nombreParada": "Plaça d'Espanya",
          "longitud": "2.653719",
          "latitud": "39.5757088"
        },
        {
          "numeroParada": "3", 
          "nombreParada": "Comte de Sallent",
          "longitud": "2.6501061",
          "latitud": "39.578271"
        },
        {
          "numeroParada": "4", 
          "nombreParada": "Biniamar, 10",
          "longitud": "2.6787203",
          "latitud": "39.5821927"
        },
        {
          "numeroParada": "6", 
          "nombreParada": "Porta de Sant Antoni",
          "longitud": "2.6548835",
          "latitud": "39.571844"
        },
        {
          "numeroParada": "7", 
          "nombreParada": "Plaça de la Reina",
          "longitud": "",
          "latitud": ""
        },
        {
          "numeroParada": "8", 
          "nombreParada": "Es Jonquet",
          "longitud": "",
          "latitud": ""
        },
        {
          "numeroParada": "9", 
          "nombreParada": "Passeig Marítim, 2",
          "longitud": "",
          "latitud": ""
        },
        {
          "numeroParada": "10", 
          "nombreParada": "Auditorium",
          "longitud": "",
          "latitud": ""
        },
        {
          "numeroParada": "11", 
          "nombreParada": "Passeig Marítim, 33",
          "longitud": "",
          "latitud": ""
        },
        {
          "numeroParada": "12", 
          "nombreParada": "Can Barberà",
          "longitud": "",
          "latitud": ""
        },
        {
          "numeroParada": "13", 
          "nombreParada": "Aragó, 271",
          "longitud": "",
          "latitud": ""
        },
        {
          "numeroParada": "14", 
          "nombreParada": "Club de Mar",
          "longitud": "",
          "latitud": ""
        },
        {
          "numeroParada": "15", 
          "nombreParada": "Port de Palma (Estació Marítima)",
          "longitud": "",
          "latitud": ""
        },
        {
          "numeroParada": "16", 
          "nombreParada": "Dic de l'Oest, 2",
          "longitud": "",
          "latitud": ""
        },
        {
          "numeroParada": "17", 
          "nombreParada": "Museu de Sant Carles",
          "longitud": "",
          "latitud": ""
        },
        {
          "numeroParada": "18", 
          "nombreParada": "Escola de Naùtica",
          "longitud": "",
          "latitud": ""
        },
        {
          "numeroParada": "19", 
          "nombreParada": "Passeig Mallorca, 39",
          "longitud": "",
          "latitud": ""
        },
        {
          "numeroParada": "20", 
          "nombreParada": "Passeig Mallorca, 18",
          "longitud": "",
          "latitud": ""
        }
    ]
	}
}
