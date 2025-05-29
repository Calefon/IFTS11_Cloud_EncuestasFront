import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EncuestasServiceService } from './services/encuestas-service.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [EncuestasServiceService]
})
export class AppComponent {
  title = 'EncuestaFrontIFTS11';
}
