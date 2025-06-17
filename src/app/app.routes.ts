import { Routes } from '@angular/router';
import { EncuestaComponent } from './components/encuesta/encuesta.component';
import { EncuestaEnviadaComponent } from './components/encuesta-enviada/encuesta-enviada.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    {path: 'not-found', component: NotFoundComponent, pathMatch: 'full'},
    {path: 'encuesta-enviada', component: EncuestaEnviadaComponent},
    {path: ':id', component: EncuestaComponent},
    {path: '**', redirectTo: '/not-found'}  
];
