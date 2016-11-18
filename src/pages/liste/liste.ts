import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

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
  loading:any;

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    private _addService: Additive
  ) {
    this._presentLoading()
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
        this._hideLoading()
        return this.additiveListe = [...this.additiveListe, data]
      })
  }

  getLevelColor(dataColor){
    let classColor:string;
    switch (dataColor) {
      case '0':
        classColor = 'green';
        break;
      case '1':
        classColor = 'green';
        break;
      case '2':
        classColor = 'orange';
        break;
      case '3':
        classColor = 'red';
        break;
      default:'0'
    }
    return classColor;
  }

  private _presentLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }

  private _hideLoading():void{
    this.loading.dismiss();
  }

}
