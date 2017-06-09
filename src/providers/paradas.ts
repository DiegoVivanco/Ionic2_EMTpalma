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

  loadWarningStops(){
    return [
      {
        "titulo": "L3. NUEVO HORARIO SÁBADOS",
        "inicio": "03/06/2017 05:40",
        "fin": "19/06/2017 10:40",
        "serviciosAfectados": "Autobús EMT",
        "descripcion": "A partir del día 3 de junio se amplía el horario nocturno de los sábados en la línea 3 Pont d'Inca-Illetes. Para más detalle pueden consultar el horario adjunto"
      },
      {
        "titulo": "L15. CAMBIO DE RECORRIDO",
        "inicio": "08/06/2017 07:40",
        "fin": "08/07/2017 00:00",
        "serviciosAfectados": "Autobús EMT",
        "descripcion": "A partir del jueves 8 de junio se prohíbe el acceso a Joan Maragall desde Torres Llavaneres / Manuel Azaña. En consecuencia la línea 15 cambiará su recorrido, quedando anuladas para esta línea las paradas 449-Joan Maragall, 25 y 459-Joan Maragall, 18. Para mayor información consulten el aviso adjunto."
      },
      {
        "titulo": "L30. CAMBIO DE RECORRIDO",
        "inicio": "08/06/2017 07:00",
        "fin": "08/07/2017 00:03",
        "serviciosAfectados": "Autobús EMT",
        "descripcion": "Con motivo de la prohíbición de girar a la izquiersa desde Manuel Azaña, a partir del jueves 8 de junio, la línea 30 no podrá pasar por Joan Maragall en dirección a PL. d'Espanya. En dirección Can Pastilla la ruta no varía. Para mayor información pueden consultar el aviso adjunto."
      },

    ]
  }
}
