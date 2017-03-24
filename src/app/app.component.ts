import { Component, NgZone } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from "firebase";
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;
  zone: NgZone;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.zone = new NgZone({});
    firebase.initializeApp({
      apiKey: "AIzaSyD1SlBh8kchMYIcVPAFdUnTJyZEWKaioiQ",
      authDomain: "self-checkout-298e3.firebaseapp.com",
      databaseURL: "https://self-checkout-298e3.firebaseio.com",
      storageBucket: "self-checkout-298e3.appspot.com",
      messagingSenderId: "829632552982"
    });
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      this.zone.run( () => {
        if (!user) {
          this.rootPage = LoginPage;
          unsubscribe();
        } else {
          this.rootPage = HomePage;
          unsubscribe();
        }
      });
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
