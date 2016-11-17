import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Wiki } from "../../providers/wiki/wiki";
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

  item:any;

  constructor(
    public navCtrl: NavController,
    private navParams: NavParams,
    private _wiki: Wiki
  ) {
    if(this.navParams.get('additive')){
        this.item = this.navParams.get('additive')
        console.log(this.item)
    }
  }

  ionViewDidLoad() {
    console.log('Hello AdditiveDetailPage Page');
  }

}
