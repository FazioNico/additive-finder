import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

import { LevelTools } from '../../tools/level/level';
/*
  Generated class for the Info page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-info',
  templateUrl: 'info.html'
})
export class InfoPage {

  title:string = 'Informations';
  tools:any = LevelTools;

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController
  ) {}

  /* Events Methode */
  ionViewDidLoad() {
    //console.log('Hello InfoPage Page');
  }

  dismiss():void{
    this.viewCtrl.dismiss();
  }
}
