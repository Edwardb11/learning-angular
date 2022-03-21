import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubtituloComponent } from './subtitulo/subtitulo.component';
import { ListadoTareasComponent } from './listado-tareas/listado-tareas.component';
import { GridComponent } from './grid/grid.component';
import { tareasServices } from './services/tarea.service';
import { FormsComponent } from './forms/forms.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SubtituloComponent,
    ListadoTareasComponent,
    GridComponent,
    FormsComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [GridComponent],
  providers: [tareasServices],
})
export class TareasModule {}
