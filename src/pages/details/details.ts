import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DoctorsAppointmentPage } from '../../pages/doctors/doctors-appointment/doctors-appointment';
import { Appointment_1Page } from '../../pages/doctors/appointment-1/appointment-1';
import { Appointment_2Page } from '../../pages/doctors/appointment-2/appointment-2';
import { Appointment_3Page } from '../../pages/doctors/appointment-3/appointment-3';
import { Appointment_4Page } from '../../pages/doctors/appointment-4/appointment-4';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  constructor(public modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  GoToAppointmentPage() {
    let addModal = this.modalCtrl.create(DoctorsAppointmentPage)
    addModal.onDidDismiss((data) => {
      if(data) {
      
      }
    });
    addModal.present();
  }

  GoToAppointmentPage_1() {
    let addModal = this.modalCtrl.create(Appointment_1Page)
    addModal.onDidDismiss((data1) => {
      if(data1) {

      }
    });
    addModal.present();
  }

  GoToAppointmentPage_2() {
    let addModal = this.modalCtrl.create(Appointment_2Page)
    addModal.onDidDismiss((data2) => {
      if(data2) {

      }
    });
    addModal.present();
  }


  GoToAppointmentPage_3() {
    let addModal = this.modalCtrl.create(Appointment_3Page)
    addModal.onDidDismiss((data3) => {
      if(data3) {

      }
    });
    addModal.present();
  }


  GoToAppointmentPage_4() {
    let addModal = this.modalCtrl.create(Appointment_4Page)
    addModal.onDidDismiss((data4) => {
      if(data4) {

      }
    });
    addModal.present();
  }

}
