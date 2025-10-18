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
  private _http = inject(HttpClient);
  private _encuestasApiEndpoint = environment.INQUIRO_API_LINK + '/encuestas';
  private _respuestasApiEndpoint = environment.INQUIRO_API_LINK + `/respuestas`;
  constructor() {}

  // ✅ 1) Leer desde assets/data/encuesta.json
  getEncuesta(id: string): Observable<IEncuestaResponse> {
    return this._http.get<any>('assets/data/inquiroencuesta.json').pipe(
      map((encuesta) => ({ encuesta: [encuesta] })) // mantiene el formato original
    );
  }

  // ✅ 2) Simular POST guardando en localStorage
  postRespuesta(respuesta: IRespuesta): Observable<IRespuesta> {
    const saved = JSON.parse(
      localStorage.getItem('inquiro_respuestas') || '[]'
    );
    saved.push({ ...respuesta, fecha: new Date().toISOString() });
    localStorage.setItem('inquiro_respuestas', JSON.stringify(saved));
    return of(respuesta).pipe(delay(300)); // simula 300 ms de respuesta
  }
}
