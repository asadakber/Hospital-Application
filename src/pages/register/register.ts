import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LoginPage } from '../../pages/login/login';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  signupForm: FormGroup
  loading: Loading
  constructor(private fb: FormBuilder,private afauth: AngularFireAuth,public loadCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams) {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      retypepassword: ['', Validators.required]
    })
    this.signupForm.reset()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  signupUser() {
    if(!this.signupForm.valid) {
      console.log(this.signupForm.value)
    } else {
      this.afauth.auth.createUserWithEmailAndPassword(this.signupForm.value.email, this.signupForm.value.password)
      .then(() => {
        this.loading.dismiss().then(() => {
          this.navCtrl.push(LoginPage)
        })
      }, (error) => {
        this.loading.dismiss().then(() => {
          console.error(error);
        })
      })
      this.loading = this.loadCtrl.create();
      this.loading.present()
    }
  }

}
