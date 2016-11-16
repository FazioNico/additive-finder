import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

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
      this._subscribe()
      console.log(this.result)
    }
    this.eNumberForm.reset();
  }

  private _subscribe(){
    return this._addService.load()
      .filter((data)=>{
        if(data.id === this.eNumberForm.value.eNumber){
          return true;
        }
        else {
          return false
        }
      })
      .subscribe((data)=>{
        this.result =  Observable.of(data);
      })
  }
}
