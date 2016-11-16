import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';
import 'rxjs/add/operator/filter';

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

  searchNumber(){
    if(this.eNumberForm.value.eNumber){
      this._addService.load()
        .filter((data)=>{
          if(data.id === this.eNumberForm.value.eNumber){
            return true;
          }
        })
        .subscribe((data)=>{
          console.log(data)
        })
    }
  }
}
