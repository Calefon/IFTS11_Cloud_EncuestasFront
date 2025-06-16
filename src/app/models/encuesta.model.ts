
export interface IEncuestaResponse{
  encuesta: IEncuesta[]
}

export interface IEncuesta{
  titulo:string,
  InquiroPK:string,
  fechaCreacion:string,
  preguntas: IPregunta[],
  InquiroSK:string
}

export interface IPregunta{
  tipoPregunta:string,
  opciones:string[],
  pregunta:string
}