import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { GoogleMaps } from '@ionic-native/google-maps';

import { ContactPage } from '../pages/contact/contact';
import { SettingsPage } from '../pages/settings/settings';
import { AboutPage } from '../pages/about/about';
import { WarningsPage } from '../pages/warnings/warnings';
import { StopsPage } from '../pages/stops/stops';
import { RoutesPage } from '../pages/routes/routes';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { Storage } from '@ionic/storage';
import {IonicStorageModule} from '@ionic/storage';
import { Paradas } from '../providers/paradas';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    StopsPage,
    RoutesPage,
    HomePage,
    WarningsPage,
    ContactPage,
    SettingsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    StopsPage,
    RoutesPage,
    HomePage,
    WarningsPage,
    ContactPage,
    SettingsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    Paradas,
    //Storage,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
