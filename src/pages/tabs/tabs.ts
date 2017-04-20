import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {  FabContainer } from 'ionic-angular';

import { HomePage } from '../home/home';
import { StopsPage } from '../stops/stops';
import { RoutesPage } from '../routes/routes';
import { WarningsPage } from '../warnings/warnings';
import { AboutPage } from '../about/about';
import { SettingsPage } from '../settings/settings';
import { ContactPage } from '../contact/contact';



@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  aboutPage = AboutPage;
  settingsPage = SettingsPage;
  contactPage = ContactPage;
  tab1Root = HomePage;
  tab2Root = StopsPage;
  tab3Root = RoutesPage;
  tab4Root = WarningsPage;

  viewModel: any;



  constructor(public navCtrl: NavController, public navParams: NavParams) {
         this.aboutPage = AboutPage;
         this.settingsPage = SettingsPage;
         this.contactPage = ContactPage;
         this.viewModel = '';
  }

  viewMode(){
    this.viewModel = '';
  }

  viewModeMap(){
    this.viewModel = 'map';
  }

  goToAboutPage(event, fab: FabContainer) {
    fab.close();
    this.navCtrl.push(this.aboutPage);
  }

  goToContactPage(event, fab: FabContainer) {
    fab.close();
    this.navCtrl.push(this.contactPage);
  }

  goToSettingsPage(event, fab: FabContainer) {
    fab.close();
    this.navCtrl.push(this.settingsPage);
  }

}
