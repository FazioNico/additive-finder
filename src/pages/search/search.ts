import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';

import { AdditiveDetailPage } from "../additive-detail/additive-detail";
import { Additive } from "../../providers/additive/additive";

/*
  Generated class for the SearchPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  data:Array<any> = [];
  eNumberForm:any;
  result:any;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    private _formBuilder: FormBuilder,
    private _addService: Additive
  ) {
    this.eNumberForm = this._formBuilder.group({
      eNumber: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    //console.log('Hello SearchPage Page');
  }

  ionViewLoaded() {
  }

  searchNumber():void{
    if(this.eNumberForm.value.eNumber){
      if(this.data.length === 0){
        this._subscribe()
      }
      let result = this.data.find((additif)=>{
        return additif.id === this.eNumberForm.value.eNumber;
      })
      if(result){
        this.navCtrl.push(AdditiveDetailPage,{
          additive: result
        })
      }
      else {
        this.showAlert()
      }
    }
    this.eNumberForm.reset();
  }

  private _subscribe(){
    return this._addService.load()
      .subscribe((data)=>{
        this.data =  [...this.data,data];
      })
  }
  private showAlert():void {
    let alert = this.alertCtrl.create({
      title: 'Inconnu',
      subTitle: `
        Cet additif n'est pas ensore répértorié dans la base de donnée.
      `,
      buttons: ['OK']
    });
    alert.present();
  }
}
