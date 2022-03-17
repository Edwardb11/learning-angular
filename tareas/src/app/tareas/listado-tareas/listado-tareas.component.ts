import { Component } from '@angular/core';
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
}
