import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RouteBackBus } from './route-back-bus';

@NgModule({
  declarations: [
    RouteBackBus,
  ],
  imports: [
    IonicPageModule.forChild(RouteBackBus),
  ],
  exports: [
    RouteBackBus
  ]
})
export class RouteBackBusModule {}
