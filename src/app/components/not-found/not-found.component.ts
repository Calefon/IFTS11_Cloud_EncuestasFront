import { Component } from '@angular/core';
import { HeaderComponentComponent } from '../header-component/header-component.component';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-not-found',
  imports: [HeaderComponentComponent, TranslocoModule],
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {

}
