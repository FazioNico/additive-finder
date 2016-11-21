import { Component, Input } from '@angular/core';
import { ModalController } from 'ionic-angular';

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

  openModal():void {
    console.log('-> load modal page')
    // let modal = this.modalCtrl.create(ModalPage);
    // modal.present();
  }
}
