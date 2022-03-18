import { Injectable } from '@angular/core';
import { Tarea } from '../interface/tarea.interface';

@Injectable()
export class tareasServices {
  tareas: Array<Tarea> = [
    { tarea: 'Barrer', completada: false },
    { tarea: 'Trapear', completada: false },
    { tarea: 'Cocinar', completada: true },
    { tarea: 'Leer', completada: false },
  ];
  deleteTarea() {
    this.tareas.pop();
  }
}
