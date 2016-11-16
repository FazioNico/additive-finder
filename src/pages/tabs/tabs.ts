import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchPage } from '../search/search'
import { ListePage } from '../liste/liste'

/*
  Generated class for the TabsPage tabs.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = SearchPage;
  tab2Root: any = ListePage;

  constructor(public navCtrl: NavController) {

  }

}
