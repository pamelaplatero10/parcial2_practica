import { Routes } from '@angular/router';
import { Inicio } from './components/inicio/inicio';
import { Procesos } from './components/procesos/procesos';
import { Reportes } from './components/reportes/reportes';
import { DetalleProceso } from './components/detalle-proceso/detalle-proceso';
import { Error404 } from './components/error404/error404';

export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'procesos', component: Procesos },
  { path: 'reportes', component: Reportes },
  { path: 'proceso/:proceso', component: DetalleProceso },
  { path: '**', component: Error404 }
];
