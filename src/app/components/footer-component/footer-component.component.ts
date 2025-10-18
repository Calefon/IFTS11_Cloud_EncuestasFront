import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-footer-component',
  imports: [TranslocoPipe],
  templateUrl: './footer-component.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponentComponent { }
