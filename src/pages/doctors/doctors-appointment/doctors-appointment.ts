import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-doctors-appointment',
  templateUrl: 'doctors-appointment.html',
})
export class DoctorsAppointmentPage {

  constructor(public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoctorsAppointmentPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }
 

}
