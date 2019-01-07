import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CardiologyPage } from './cardiology';

@NgModule({
  declarations: [
    CardiologyPage,
  ],
  imports: [
    IonicPageModule.forChild(CardiologyPage),
  ],
})
export class CardiologyPageModule {}
