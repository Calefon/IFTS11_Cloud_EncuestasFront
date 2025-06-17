import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IEncuestaResponse } from '../models/encuesta.model';
import { environment } from '../../environments/environment';
import { IRespuesta } from '../models/respuesta.model';

@Injectable({
  providedIn: 'root'
})
export class EncuestasServiceService {

  private _http = inject(HttpClient)
  private _encuestasApiEndpoint = environment.INQUIRO_API_LINK + '/encuestas';
  private _respuestasApiEndpoint = environment.INQUIRO_API_LINK + `/respuestas`;
  constructor() { }

  getEncuesta(id : string) : Observable<IEncuestaResponse>{
    let emailPrueba = 'prueba@gmail.com'
    let linkReq = this._encuestasApiEndpoint+`/email/${emailPrueba}/id/${id}`
    return this._http.get<IEncuestaResponse>(linkReq);
  }
  
  postRespuesta(respuesta : IRespuesta){
    let linkReq = this._respuestasApiEndpoint
    return this._http.post<IRespuesta>(linkReq,respuesta);
  }
}

