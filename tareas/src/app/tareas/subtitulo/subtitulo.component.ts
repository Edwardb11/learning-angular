import { Component } from '@angular/core';
import { tareasServices } from './../services/tarea.service';

@Component({
  selector: 'app-subtitulo',
  templateUrl: './subtitulo.component.html',
})
export class SubtituloComponent {
  constructor(private tareasServices: tareasServices) {}

  get tareas() {
    return this.tareasServices.tareas.length;
  }
}
