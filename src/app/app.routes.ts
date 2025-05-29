import { Routes } from '@angular/router';
import { EncuestaComponent } from './components/encuesta/encuesta.component';

export const routes: Routes = [
    {path: '', redirectTo: '/not-found', pathMatch: 'full'},
    { path: ':id', component: EncuestaComponent},

];
