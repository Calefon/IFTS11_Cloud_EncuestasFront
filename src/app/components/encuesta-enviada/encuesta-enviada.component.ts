import { Component } from '@angular/core';
import { HeaderComponentComponent } from '../header-component/header-component.component';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-encuesta-enviada',
  imports: [HeaderComponentComponent, TranslocoModule],
  templateUrl: './encuesta-enviada.component.html',
})
export class EncuestaEnviadaComponent {

}
