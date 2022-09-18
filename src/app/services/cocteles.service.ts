import { Injectable } from '@angular/core';
import { Coctel } from '../models/coctel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';

@Injectable()
export class CoctelService {

  public url: string;
  constructor( private _http: HttpClient ) {

      this.url = Global.url;

  }

  pruebas() {
    return 'la prueba se ha realizado';
  }


  getCoctelesAlcohol():Observable<any>{
    return this._http.get(this.url)
  }
}
