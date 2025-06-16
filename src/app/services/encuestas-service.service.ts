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

  private http = inject(HttpClient)
  private encuestasApi = environment.INQUIRO_API_LINK + '/encuestas';
  constructor() { }

  getEncuesta(id : string) : Observable<IEncuestaResponse>{
    let emailPrueba = 'prueba@gmail.com'
    let linkReq = this.encuestasApi+`/email/${emailPrueba}/id/${id}`
    return this.http.get<IEncuestaResponse>(linkReq);
  }
  
  postRespuesta(respuesta : IRespuesta){
    let linkReq = this.encuestasApi+`/respuestas`
    return this.http.post<IRespuesta>(linkReq,respuesta);
  }
}

