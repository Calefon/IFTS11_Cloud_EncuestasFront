import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EncuestasServiceService } from '../../services/encuestas-service.service';

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
  public encuesta: any

  constructor(){
    this.route.params.subscribe((params) => {  
      this.encuestaId = params['id'];
      if(this.encuestaId)
        this.encuesta = this.encuestasService.getEncuesta(this.encuestaId);
      console.log(this.encuesta);
    });
  }
  
}
