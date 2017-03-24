import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';

/*
  Generated class for the Scan page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html'
})
export class ScanPage {
  barcodeData: any;//originally type BarcodeData
  constructor(private nav: NavController, navParams: NavParams) {
    this.barcodeData = navParams.get('details');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ScanPage');
  }

}
