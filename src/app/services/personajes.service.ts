import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';

@Injectable()
export class PersonajeService {

  public url: string;
  constructor( private http: HttpClient ) {

      this.url = Global.url;

  }

  pruebas() {
    return 'la prueba se ha realizado';
  }


  getPersonajesMarvel():Observable<any>{
    return this.http.get(this.url);

  }
}
