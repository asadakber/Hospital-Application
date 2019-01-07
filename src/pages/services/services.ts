import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { CardiologyPage } from '../../pages/cardiology/cardiology';

@IonicPage()
@Component({
  selector: 'page-services',
  templateUrl: 'services.html',
})
export class ServicesPage {

  constructor(public modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicesPage');
  }

  GoToCardiologyPage() {
    let addModal = this.modalCtrl.create(CardiologyPage)
    addModal.onDidDismiss((data) => {
      if(data) {
      
      }
    });
    addModal.present();
  }

  // GoToCardiologyPage() {
  //   this.navCtrl.push(CardiologyPage)
  // }

}
