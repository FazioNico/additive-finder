import { Component, Input } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { InfoPage } from "../../pages/info/info";
/*
  Generated class for the HeaderContent component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'header-content',
  templateUrl: 'header-content.html'
})
export class HeaderContentComponent {

  @Input() title: string;

  constructor(
    public modalCtrl: ModalController
  ) {
  }

  /* Events Methodes */ 
  openModal():void {
    let modal = this.modalCtrl.create(InfoPage);
    modal.present();
  }
}
