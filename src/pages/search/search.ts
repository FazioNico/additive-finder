import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';
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
    private formBuilder: FormBuilder
  ) {
    this.eNumberForm = this.formBuilder.group({
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
      console.log(this.eNumberForm.value.eNumber)
    }
  }
}
