import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EncuestaResponse } from '../interfaces/encuestaInterface';

@Injectable({
  providedIn: 'root'
})
export class EncuestasServiceService {

  private http = inject(HttpClient)
  private encuestasApi = 'http://inquiro-env-1.eba-fzt6xm2r.us-east-1.elasticbeanstalk.com/encuestas';
  constructor() { }

  getEncuesta(id : string) : Observable<EncuestaResponse>{
    let emailPrueba = 'prueba@gmail.com'
    let linkReq = this.encuestasApi+`/email/${emailPrueba}/id/${id}`
    return this.http.get<EncuestaResponse>(linkReq);
  }  
}

