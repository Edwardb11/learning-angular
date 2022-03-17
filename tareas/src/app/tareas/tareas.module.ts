import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubtituloComponent } from './subtitulo/subtitulo.component';
import { ListadoTareasComponent } from './listado-tareas/listado-tareas.component';

@NgModule({
  declarations: [SubtituloComponent, ListadoTareasComponent],
  imports: [CommonModule],
  exports: [SubtituloComponent, ListadoTareasComponent],
})
export class TareasModule {}
