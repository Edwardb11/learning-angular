import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectosComponent } from './proyectos.component';
import { InformacionComponent } from './../informacion/informacion.component';

const routes: Routes = [
  { path: '', component: ProyectosComponent },
  { path: 'informacion/:nombre', component: InformacionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProyectosRoutingModule {}
