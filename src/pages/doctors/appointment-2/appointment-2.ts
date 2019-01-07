import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController  } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-appointment-2',
  templateUrl: 'appointment-2.html',
})
export class Appointment_2Page {

  constructor(public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Appointment_2Page');
  }

  close() {
    this.viewCtrl.dismiss();
  }

}
