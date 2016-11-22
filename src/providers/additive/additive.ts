import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';

import { AdditiveData } from "./additive-data";

/*
  Generated class for the Additive provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Additive {


  constructor(public http: Http) {
  }

  load():Observable<any>{
    return Observable.from(AdditiveData)
    .map((data)=>{
        return data;
    })
  }
}
