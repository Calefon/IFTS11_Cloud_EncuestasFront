import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EncuestasServiceService } from '../../services/encuestas-service.service';
import { IEncuesta } from '../../models/encuesta.model';
import { IRespData, IRespuesta } from '../../models/respuesta.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponentComponent } from '../header-component/header-component.component';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-encuesta',
  imports: [CommonModule, FormsModule, HeaderComponentComponent, TranslocoModule],
  templateUrl: './encuesta.component.html',
})
export class EncuestaComponent implements OnInit{
  private route = inject(ActivatedRoute);
  private _router = inject(Router)
  public encuestaId : string | undefined;
  private encuestasService = inject(EncuestasServiceService);
  public encuesta: IEncuesta = <IEncuesta>{};
  public respuesta: IRespuesta;


  constructor(){
    this.respuesta = <IRespuesta>{
      respuestaInquiroPK: "",
      respuestas: <IRespData[]>[]
    };
  }

  ngOnInit(){
    this.route.params.subscribe(
      (params) => {
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
            error: err => {
              console.error(err);
              this._router.navigate(['/not-found'])
            }
          }

        )
      }

    });
  }

  enviarRespuesta(){
    console.log(this.respuesta)
    this.encuestasService.postRespuesta(this.respuesta).subscribe(
      {
        next: resp => {
          console.log(resp)
          this._router.navigate(['/encuesta-enviada'])
        },
        error: err => console.error(err)
      }
    )
  }


}
