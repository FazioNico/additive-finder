import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

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
  wikiData:any;
  loading:any;

  constructor(
    public navCtrl: NavController,
    private navParams: NavParams,
    public loadingCtrl: LoadingController,
    private _wiki: Wiki
  ) {
    if(this.navParams.get('additive')){
        this._presentLoading()
        this.item = this.navParams.get('additive')
        this._wiki.load(`e${this.item.id}`)
          .subscribe((data)=>{
            this.wikiData = data
            this._hideLoading()
            //console.log('find->', this.wikiData)
          },
          (err) => {
            this._hideLoading()
            //console.log(err);
            this.wikiData = {'extract': 'Pas de détails supplémentaires.'}
          })
    }
  }

  ionViewDidLoad() {
    console.log('Hello AdditiveDetailPage Page');
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
