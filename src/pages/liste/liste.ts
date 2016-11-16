import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/take';

import { Additive } from "../../providers/additive/additive";

/*
  Generated class for the ListePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-liste',
  templateUrl: 'liste.html'
})
export class ListePage {

  additiveListe:Array<any> = [];

  constructor(
    public navCtrl: NavController,
    private _addService: Additive
  ) {
    this.loadData();
  }

  ionViewDidLoad() {
    console.log('Hello ListePage Page');
  }

  onGoAdditive(event){
    console.log(event)
  }

  loadData(){
    this._addService.load()
      .subscribe((data)=>{
        return this.additiveListe = [...this.additiveListe, data]
      })
  }

}
