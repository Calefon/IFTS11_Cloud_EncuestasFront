import { Component } from '@angular/core';
import { HeaderComponentComponent } from '../header-component/header-component.component';
import { TranslocoModule } from '@jsverse/transloco';
import { FooterComponentComponent } from '../footer-component/footer-component.component';

@Component({
  selector: 'app-not-found',
  imports: [HeaderComponentComponent, FooterComponentComponent,TranslocoModule],
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {

}
