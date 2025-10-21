import { Component } from '@angular/core';
import { HeaderComponentComponent } from '../header-component/header-component.component';
import { TranslocoModule } from '@jsverse/transloco';
import { FooterComponentComponent } from '../footer-component/footer-component.component';

@Component({
  selector: 'app-encuesta-enviada',
  imports: [HeaderComponentComponent, FooterComponentComponent,TranslocoModule],
  templateUrl: './encuesta-enviada.component.html',
})
export class EncuestaEnviadaComponent {

}
