import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { RegisterPage } from '../../pages/register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  gotologinpage() {
    this.navCtrl.push(LoginPage)
  }

  gotosignuppage() {
    this.navCtrl.push(RegisterPage)
  }

}
