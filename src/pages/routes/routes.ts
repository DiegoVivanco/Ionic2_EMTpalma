import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Lineas } from '../../providers/lineas';


@Component({
  selector: 'page-routes',
  templateUrl: 'routes.html'
})
export class RoutesPage {

	lineas: Array<any>;


  constructor(public navCtrl: NavController, 
  			  public lineasService : Lineas,) {

  	this.lineas = this.lineasService.loadLineas();
  	console.log(this.lineas)
  }
}
