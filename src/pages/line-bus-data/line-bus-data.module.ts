import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LineBusData } from './line-bus-data';

@NgModule({
  declarations: [
    LineBusData,
  ],
  imports: [
    IonicPageModule.forChild(LineBusData),
  ],
  exports: [
    LineBusData
  ]
})
export class LineBusDataModule {}
