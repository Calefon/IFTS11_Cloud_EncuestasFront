import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EncuestasServiceService {

  constructor() { }

  getEncuesta(id : string) : Encuesta{
    return {
       surveyId: id,
       questions: [
        {
          questionId: "q1",
          type: "open",
          questionText: "Hola, esto es una pregunta abierta.",
        },
        {
          questionId: "q2",
          type: "options-radio",
          questionText: "Opciones!!",
          options: ["opcion1","opcion2","opcion3"]
        }
       ]
    }
  }  
}

interface Encuesta{
  surveyId: string,
  questions: Pregunta[]
}

interface Pregunta{
  questionId: string,
  type: string,
  questionText: string,
  options?: string[]
}