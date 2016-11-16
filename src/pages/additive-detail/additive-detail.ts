import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the AdditiveDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-additive-detail',
  templateUrl: 'additive-detail.html'
})
export class AdditiveDetailPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello AdditiveDetailPage Page');
  }

}
