import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AdditiveDetailPage } from "../additive-detail/additive-detail";
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
  max:number = 20;

  constructor(
    public navCtrl: NavController,
    private _addService: Additive
  ) {
    this.loadData();
  }

  ionViewDidLoad() {
    console.log('Hello ListePage Page');
  }

  onGoAdditive(event,additive){
    console.log(additive)
    this.navCtrl.push(AdditiveDetailPage,{
      additive: additive
    })
  }

  onMore(){
    this.max = this.max + (50)
  }

  loadData(){
    this._addService.load()
      .subscribe((data)=>{
        return this.additiveListe = [...this.additiveListe, data]
      })
  }


}
