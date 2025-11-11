import { Injectable, inject } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IEncuestaResponse } from '../models/encuesta.model';
import { environment } from '../../environments/environment';
import { IRespuesta } from '../models/respuesta.model';

@Injectable({
  providedIn: 'root',
})
export class EncuestasServiceService {
  private _http = inject(HttpClient)
  private _encuestasApiEndpoint = environment.INQUIRO_API_LINK + '/encuestas';
  private _respuestasApiEndpoint = environment.INQUIRO_API_LINK + `/respuestas`;
  constructor() { }

  getEncuesta(id : string) : Observable<IEncuestaResponse>{
    let linkReq = this._encuestasApiEndpoint+`/${id}`
    return this._http.get<IEncuestaResponse>(linkReq);
  }

  postRespuesta(respuesta : IRespuesta){
    let linkReq = this._respuestasApiEndpoint
    return this._http.post<IRespuesta>(linkReq,respuesta);
  }
}
