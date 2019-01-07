import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DoctorsAppointmentPage } from './doctors-appointment';

@NgModule({
  declarations: [
    DoctorsAppointmentPage,
  ],
  imports: [
    IonicPageModule.forChild(DoctorsAppointmentPage),
  ],
})
export class DoctorsAppointmentPageModule {}
