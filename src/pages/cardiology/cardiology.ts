import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cardiology',
  templateUrl: 'cardiology.html',
})
export class CardiologyPage {
  cardiology;
  constructor(public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

  Investigations = "The Department of Cardiology provides State-of-the- art investigation facilities like:"
  Heading = "Investigations"
  details = "There are many variations of passages of lorem Ipsum available, but the majoity have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
  heading = "About the Department"

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardiologyPage');
  }

  initializeItems() {
    this.cardiology = [
      'Echocardiogram',
      'Echo Color Doppler',
      'Stress Test (TMT)',
      'Holter monitor',
      'Electrophysiological Study (EPS) & Ablatio',
      'Electrocardiogram(ECG)',
      'MRI',
      'Chest x-ray',
      'Lab tests',
    ]
  }

  close() {
    this.viewCtrl.dismiss();
  }

}
