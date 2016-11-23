import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*
  Generated class for the Wiki provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Wiki {

  constructor(public http: Http) {
    //console.log('Hello Wiki Provider');
  }

  load(query:string):Observable<any>{
    return this.http.get('https://fr.wikipedia.org/api/rest_v1/page/summary/'+ query)
      .map(res =>res.json())
  }

}
