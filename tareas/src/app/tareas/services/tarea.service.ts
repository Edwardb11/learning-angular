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
  deleteTarea(nombreTarea: string) {
    this.tareas = this.tareas.filter((tarea) => tarea.tarea !== nombreTarea);
  }
  completaTarea(nombreTarea: string) {
    const tarea: Tarea = this.tareas.find(
      (tarea) => tarea.tarea === nombreTarea
    )!;
    tarea.completada = !tarea.completada;
  }
}
