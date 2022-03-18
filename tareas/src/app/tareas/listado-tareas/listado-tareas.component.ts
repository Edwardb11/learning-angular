import { Component } from '@angular/core';
import { Tarea } from '../interface/tarea.interface';
import { tareasServices } from './../services/tarea.service';

@Component({
  selector: 'app-listado-tareas',
  templateUrl: './listado-tareas.component.html',
  styleUrls: ['./listado-tareas.component.css'],
})
export class ListadoTareasComponent {
  constructor(private tareasServices: tareasServices) {}
  get tareas() {
    return this.tareasServices.tareas;
  }
  delete(Tarea: Tarea) {
    this.tareasServices.deleteTarea(Tarea.tarea);
  }
}
