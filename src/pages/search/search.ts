import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

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
    private _formBuilder: FormBuilder,
    private _addService: Additive
  ) {
    this.eNumberForm = this._formBuilder.group({
      eNumber: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('Hello SearchPage Page');
  }

  ionViewLoaded() {
  }

  searchNumber():void{
    if(this.eNumberForm.value.eNumber){
      if(this.data.length === 0){
        this._subscribe()
      }
      this.data.forEach((additif)=>{
        if(additif.id === this.eNumberForm.value.eNumber){
          this.result = additif;
          this.navCtrl.push(AdditiveDetailPage,{
            additive: additif
          })
        }
      })
    }
    this.eNumberForm.reset();
  }

  private _subscribe(){
    return this._addService.load()
      .subscribe((data)=>{
        this.data =  [...this.data,data];
      })
  }
}
