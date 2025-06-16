import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EncuestasServiceService } from '../../services/encuestas-service.service';
import { EncuestaResponse, Encuesta, Pregunta } from '../../models/encuesta.model';

@Component({
  selector: 'app-encuesta',
  imports: [],
  templateUrl: './encuesta.component.html',
  styleUrl: './encuesta.component.css',
})
export class EncuestaComponent{
  private route = inject(ActivatedRoute);
  public encuestaId : string | undefined;
  private encuestasService = inject(EncuestasServiceService);
  public encuesta: Encuesta = <Encuesta>{};

  constructor(){
    this.route.params.subscribe((params) => {  
      this.encuestaId = params['id'];
      if(this.encuestaId){
        this.encuestasService.getEncuesta(this.encuestaId).subscribe(
          resp => {
            this.encuesta = resp.encuesta[0]
          }
        )
      }
      console.log(this.encuesta);
    });
  }
  
}
