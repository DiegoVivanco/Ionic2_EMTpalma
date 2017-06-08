import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { LineBusData } from '../pages/line-bus-data/line-bus-data';
import { RouteForwardBus } from '../pages/route-forward-bus/route-forward-bus';
import { RouteBackBus } from '../pages/route-back-bus/route-back-bus';

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
import { Lineas } from '../providers/lineas';
import { ParadasMapa } from '../providers/paradas-mapa';


import { Geolocation } from '@ionic-native/geolocation';


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
    LineBusData,
    RouteForwardBus,
    RouteBackBus,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, { tabsHideOnSubPages: true }),
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
    LineBusData,
    RouteForwardBus,
    RouteBackBus,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Lineas,
    ParadasMapa,
    Paradas,
    Geolocation,

    //Storage,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
