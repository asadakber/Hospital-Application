import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { ServicesPage } from '../../pages/services/services';
import { CardiologyPage } from '../../pages/cardiology/cardiology';
import { CategoryPage } from '../../pages/category/category';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  constructor(public menuCtrl: MenuController,public navCtrl: NavController, public navParams: NavParams) {
    menuCtrl.enable(true);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  slides = [
    {
      title: "Welcome to the CareYou!",
      description: "There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration in some from.",
      image: "assets/imgs/medical-funding.jpg",
      
    },
    {
      title: "Latest News!",
      para: "November 18,2016",
      heading: "Globally Free Consultant",
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. from 45 BC, making it over 2000 years old. Richard McClintock.",
      image: "assets/imgs/Doctor_2.jpg",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "assets/img/ica-slidebox-img-3.png",
    }
  ];

  GoToservicePage() {
    this.navCtrl.push(ServicesPage)
  }

  GoTocardiologyPage() {
    this.navCtrl.push(CardiologyPage)
  }

  GoTocategoryPage() {
    this.navCtrl.push(CategoryPage)
  }

}
