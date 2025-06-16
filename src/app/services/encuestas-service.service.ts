import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EncuestaResponse } from '../models/encuesta.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EncuestasServiceService {

  private http = inject(HttpClient)
  private encuestasApi = environment.INQUIRO_API_LINK + '/encuestas';
  constructor() { }

  getEncuesta(id : string) : Observable<EncuestaResponse>{
    let emailPrueba = 'prueba@gmail.com'
    let linkReq = this.encuestasApi+`/email/${emailPrueba}/id/${id}`
    return this.http.get<EncuestaResponse>(linkReq);
  }
  
  postRespuesta(){

  }
}

