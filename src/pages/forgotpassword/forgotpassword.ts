import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-forgotpassword',
  templateUrl: 'forgotpassword.html',
})
export class ForgotpasswordPage {
  public resetPasswordForm: FormGroup;
  constructor(public loadingCtrl: LoadingController,public alertCtrl: AlertController,private fb: FormBuilder,private authprovider: AuthProvider,public navCtrl: NavController, public navParams: NavParams) {
   this.resetPasswordForm = this.fb.group({
     email: ['', Validators.required]
   })
   this.resetPasswordForm.reset();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotpasswordPage');
  }

  resetPassword(): void {
    if(!this.resetPasswordForm.valid) {
      console.log(this.resetPasswordForm.value)
    } else {
      const loading = this.loadingCtrl.create();
      this.authprovider.resetPassword(this.resetPasswordForm.value.email).then(
        () => {
          loading.dismiss().then(() => {
            const alert = this.alertCtrl.create({
              title: 'Your email is on the way!',
              subTitle:
              'We sent you an email with instructions to retrieve your password.',
              buttons: [
                {
                  text: 'OK',
                  handler: data => {
                    this.navCtrl.pop();
                  }
                }
              ]
            });
            alert.present();
          })
        },
        error => {
          loading.dismiss().then(() => {
            const alert = this.alertCtrl.create({
              title: error.name,
              subTitle: error.message,
              buttons: [
                {
                  text: 'OK',
                  handler: data => {
                    console.log('There was an error');
                  }
                }
              ]
            });
            alert.present();
          });
        }
      );
      loading.present();
    }
  }

}
