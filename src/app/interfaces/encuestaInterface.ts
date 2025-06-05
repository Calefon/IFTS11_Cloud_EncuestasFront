

export interface EncuestaResponse{
  encuesta: Encuesta[]
}

export interface Encuesta{
  titulo:string,
  InquiroPK:string,
  fechaCreacion:string,
  preguntas:Pregunta[],
  InquieroSK:string
}

export interface Pregunta{
  tipoPregunta:string,
  opciones:string[],
  pregunta:string
}