import { Component, ViewChild} from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { ServicesPage } from '../pages/services/services';
import { CardiologyPage } from '../pages/cardiology/cardiology';
import { CategoryPage } from '../pages/category/category';
import { DetailsPage } from '../pages/details/details';
import { DoctorsAppointmentPage } from '../pages/doctors/doctors-appointment/doctors-appointment';
import { Appointment_1Page } from '../pages/doctors/appointment-1/appointment-1';
import { CalenderPage } from '../pages/calender/calender';
import { LocationPage } from '../pages/location/location';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      { title: 'dashboard', component: DashboardPage },
      { title: 'service', component: ServicesPage },
      { title: 'category', component: CategoryPage },
      { title: 'details', component: DetailsPage },
      { title: 'calendar', component: CalenderPage },
      { title: 'location', component: LocationPage },
      { title: 'about us', component: AboutPage },
      { title: 'contact us', component: ContactPage },
    ];
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  
}

