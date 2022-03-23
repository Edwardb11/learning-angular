import { Injectable } from '@angular/core';
import { Tarea } from '../interface/tarea.interface';

@Injectable()
export class tareasServices {
  tareas: Array<Tarea> = [
    { id: 1, tarea: 'Barrer', completada: false },
    { id: 2, tarea: 'Trapear', completada: false },
    { id: 3, tarea: 'Cocinar', completada: true },
    { id: 4, tarea: 'Leer', completada: false },
  ];
  deleteTarea(tareaId: number) {
    this.tareas = this.tareas.filter((tarea) => tarea.id !== tareaId);
  }
  completaTarea(tareaId: number) {
    const tarea: Tarea = this.tareas.find((tarea) => tarea.id === tareaId)!;
    tarea.completada = !tarea.completada;
  }
  agregarTarea(task) {
    // this.tareas.push({ tarea: 'Barrer', completada: false });
    this.tareas.push(task);
  }
}
