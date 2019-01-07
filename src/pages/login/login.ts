import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController } from 'ionic-angular';
import { RegisterPage } from '../../pages/register/register';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DashboardPage } from '../../pages/dashboard/dashboard';
import { ForgotpasswordPage } from '../../pages/forgotpassword/forgotpassword';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginForm: FormGroup
  loading: Loading
  constructor(public loadCtrl: LoadingController,private fb: FormBuilder,private afauth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
    this.loginForm.reset()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  goToSignUpPage() {
    this.navCtrl.push(RegisterPage)
  }

  goToResetPassword() {
    this.navCtrl.push(ForgotpasswordPage)
  }

  signinUser() {
    if(!this.loginForm.valid) {
      console.log(this.loginForm.value)
    } else {
      this.afauth.auth.signInWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password)
      .then(() => {
        this.loading.dismiss().then(() => {
          this.navCtrl.push(DashboardPage)
        });
      }, (error) => {
        this.loading.dismiss().then(() => {
          console.error(error);
        })
      })
      this.loading = this.loadCtrl.create();
      this.loading.present();
    }
  }

  

}
