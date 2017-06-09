import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Paradas } from '../../providers/paradas';

/**
 * Generated class for the Warnings page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-warnings',
  templateUrl: 'warnings.html',
})
export class WarningsPage {

  warnings: any;
  shownGroup;

  constructor(
        public navCtrl: NavController,
        public warningsStopService: Paradas,
  ) {
    this.warnings = warningsStopService.loadWarningStops();
    this.shownGroup = null;

  }

  toggleGroup(group: any){

    if(this.isGroupShown(group)){
      this.shownGroup = null;
    }else {
      this.shownGroup = group;
    }
  }

  isGroupShown(group: any){
    return this.shownGroup === group;

  }



}
