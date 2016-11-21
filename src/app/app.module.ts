import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { SearchPage } from '../pages/search/search';
import { ListePage } from '../pages/liste/liste';
import { AdditiveDetailPage } from "../pages/additive-detail/additive-detail";
import { TabsPage } from '../pages/tabs/tabs';

import { HeaderContentComponent } from '../components/header-content/header-content';

import { Additive } from '../providers/additive/additive';
import { Wiki } from '../providers/wiki/wiki';

const pages:Array<any> = [
  SearchPage,
  ListePage,
  AdditiveDetailPage,
  TabsPage
];
const components:Array<any> = [
  HeaderContentComponent
];
const ionicAppConfig:Object = {
  tabsPlacement: 'bottom',
  mode: 'md'
};
const providers:Array<any> = [
  Additive,
  Wiki
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
