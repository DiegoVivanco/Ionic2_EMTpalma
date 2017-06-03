import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RouteForwardBus } from './route-forward-bus';

@NgModule({
  declarations: [
    RouteForwardBus,
  ],
  imports: [
    IonicPageModule.forChild(RouteForwardBus),
  ],
  exports: [
    RouteForwardBus
  ]
})
export class RouteForwardBusModule {}
