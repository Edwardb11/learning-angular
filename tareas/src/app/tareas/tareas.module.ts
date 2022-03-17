import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubtituloComponent } from './subtitulo/subtitulo.component';
import { ListadoTareasComponent } from './listado-tareas/listado-tareas.component';
import { GridComponent } from './grid/grid.component';
import { tareasServices } from './services/tarea.service';

@NgModule({
  declarations: [SubtituloComponent, ListadoTareasComponent, GridComponent],
  imports: [CommonModule],
  exports: [GridComponent],
  providers: [tareasServices],
})
export class TareasModule {}
