import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { SearchPage } from '../pages/search/search';
import { ListePage } from '../pages/liste/liste';
import { TabsPage } from '../pages/tabs/tabs';

import { Additive } from '../providers/additive/additive';

const pages:Array<any> = [
  SearchPage,
  ListePage,
  TabsPage
];
const components:Array<any> = [];
const ionicAppConfig:Object = {
  tabsPlacement: 'bottom',
  mode: 'md'
};
const providers:Array<any> = [
  Additive
];

@NgModule({
  declarations: [MyApp, ...pages, ...components],
  imports: [
    IonicModule.forRoot(MyApp, ionicAppConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, ...pages],
  providers: [...providers]
})
export class AppModule {}
