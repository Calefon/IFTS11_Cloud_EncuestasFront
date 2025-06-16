
export interface IRespuesta{
    respuestaInquiroPK: string,
    respuestas: IRespData[]
}

export interface IRespData{
    pregunta: string,
    respuesta: string
}