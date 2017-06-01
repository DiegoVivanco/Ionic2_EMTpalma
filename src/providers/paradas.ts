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

  constructor(public http: Http) {}

  loadParadas(){
    return [
      {
        "numeroParada": "1",
        "nombreParada": "Porta de Sant Antoni",
        "estimaciones": [
          {
            "color": "rgb(243, 219, 120)",
            "line": "11",
            "vh_first": {
              "destino": "SA INDIOTERIA",
              "seconds": 570,
              "enParada": false,
              "llegando": false
            },
            "vh_second": {
              "destino": "SA INDIOTERIA",
              "seconds": 2370,
              "enParada": false,
              "llegando": false
            }
          }, {
            "color": "rgb(211, 221, 125)",
            "line": "31",
            "vh_first": {
              "destino": "A-S'ARENAL-S.JORDI",
              "seconds": 570,
              "enParada": false,
              "llegando": false
            },
            "vh_second": {
              "destino": "SA INDIOTERIA",
              "seconds": 2370,
              "enParada": false,
              "llegando": false
            }
          } ]
      },
      {
        "numeroParada": "2",
        "nombreParada": "Plaça d'Espanya",
      },
      {
        "numeroParada": "3",
        "nombreParada": "Comte de Sallent",
      },
      {
        "numeroParada": "4",
        "nombreParada": "Biniamar, 10",
      },
      {
        "numeroParada": "6",
        "nombreParada": "Porta de Sant Antoni",
      },
      {
        "numeroParada": "7",
        "nombreParada": "Plaça de la Reina",
      },
      {
        "numeroParada": "8",
        "nombreParada": "Es Jonquet",
      },
      {
        "numeroParada": "9",
        "nombreParada": "Passeig Marítim, 2",
      },
      {
        "numeroParada": "10",
        "nombreParada": "Auditorium",
      },
      {
        "numeroParada": "11",
        "nombreParada": "Passeig Marítim, 33",
      },
      {
        "numeroParada": "12",
        "nombreParada": "Can Barberà",
      },
      {
        "numeroParada": "13",
        "nombreParada": "Aragó, 271",
      },
      {
        "numeroParada": "14",
        "nombreParada": "Club de Mar",
      },
      {
        "numeroParada": "15",
        "nombreParada": "Port de Palma (Estació Marítima)",
      },
      {
        "numeroParada": "16",
        "nombreParada": "Dic de l'Oest, 2",
      },
      {
        "numeroParada": "17",
        "nombreParada": "Museu de Sant Carles",
      },
      {
        "numeroParada": "18",
        "nombreParada": "Escola de Naùtica",
      },
      {
        "numeroParada": "19",
        "nombreParada": "Passeig Mallorca, 39",
      },
      {
        "numeroParada": "20",
        "nombreParada": "Passeig Mallorca, 18",
      }
    ]
  }
}
