import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthProvider } from '../providers/auth/auth';
import { ForgotpasswordPage } from '../pages/forgotpassword/forgotpassword';
import { ServicesPage } from '../pages/services/services';
import { CardiologyPage } from '../pages/cardiology/cardiology';
import { CategoryPage } from '../pages/category/category';
import { DetailsPage } from '../pages/details/details';
import { CalenderPage } from '../pages/calender/calender';
import { LocationPage } from '../pages/location/location';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { DoctorsAppointmentPage } from '../pages/doctors/doctors-appointment/doctors-appointment';
import { Appointment_1Page } from '../pages/doctors/appointment-1/appointment-1';
import { Appointment_2Page } from '../pages/doctors/appointment-2/appointment-2';
import { Appointment_3Page } from '../pages/doctors/appointment-3/appointment-3';
import { Appointment_4Page } from '../pages/doctors/appointment-4/appointment-4';

export const FirebaseConfig = {
    apiKey: "AIzaSyAr8VwZIujA7w3CoOuykgKvkz9FtOTYt0I",
    authDomain: "hospital-app-8828d.firebaseapp.com",
    databaseURL: "https://hospital-app-8828d.firebaseio.com",
    projectId: "hospital-app-8828d",
    storageBucket: "hospital-app-8828d.appspot.com",
    messagingSenderId: "1031661123974"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    DashboardPage,
    ForgotpasswordPage,
    ServicesPage,
    CardiologyPage,
    CategoryPage,
    DetailsPage,
    DoctorsAppointmentPage,
    Appointment_1Page,
    Appointment_2Page,
    Appointment_3Page,
    Appointment_4Page,
    CalenderPage,
    LocationPage,
    AboutPage,
    ContactPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(FirebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    DashboardPage,
    ForgotpasswordPage,
    ServicesPage,
    CardiologyPage,
    CategoryPage,
    DetailsPage,
    DoctorsAppointmentPage,
    Appointment_1Page,
    Appointment_2Page,
    Appointment_3Page,
    Appointment_4Page,
    CalenderPage,
    LocationPage,
    AboutPage,
    ContactPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}
