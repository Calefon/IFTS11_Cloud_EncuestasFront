import { Component, inject, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EncuestasServiceService } from '../../services/encuestas-service.service';
import { IEncuestaResponse, IEncuesta, IPregunta } from '../../models/encuesta.model';
import { IRespData, IRespuesta } from '../../models/respuesta.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-encuesta',
  imports: [CommonModule, FormsModule],
  templateUrl: './encuesta.component.html',
  styleUrl: './encuesta.component.css',
})
export class EncuestaComponent{
  private route = inject(ActivatedRoute);
  public encuestaId : string | undefined;
  private encuestasService = inject(EncuestasServiceService);
  public encuesta: IEncuesta = <IEncuesta>{};
  public respuesta: IRespuesta;

  //http://localhost:4200/fc93ff08-d020-4e0f-857f-66a5bc0f07b1

  constructor(){
    this.respuesta = <IRespuesta>{
      respuestaInquiroPK: "",
      respuestas: <IRespData[]>[] 
    };
    this.route.params.subscribe((params) => {  
      this.encuestaId = params['id'];
      if(this.encuestaId){
        this.encuestasService.getEncuesta(this.encuestaId).subscribe(
          {
            next: resp => {
                  this.encuesta = resp.encuesta[0];
                  this.respuesta.respuestaInquiroPK = this.encuesta.InquiroPK;
                  let respArray : IRespData[] = [];
    
                  for(let i = 0; i < this.encuesta.preguntas.length; i++){
                    let resp : IRespData = <IRespData>{};
                    resp.pregunta = this.encuesta.preguntas[i].pregunta;
                    respArray.push(resp);
                  }
                  this.respuesta.respuestas = respArray;
                },
            error: err => console.error(err)
          }
          
        )
      }
      console.log(this.encuesta);
    });
  }

  enviarRespuesta(){
    this.encuestasService.postRespuesta(this.respuesta).subscribe(
      {
        next: resp => console.log(resp),
        error: err => console.error(err)
      }
    )
  }

  
}
