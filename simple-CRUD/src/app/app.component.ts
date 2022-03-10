import { Component } from '@angular/core';
import { Empleados } from './models/empleados';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  EmpleadoArray: Empleados[] = [
    { id: 1, nombre: 'Edward', pais: 'RD' },
    { id: 2, nombre: 'Jose Daniel', pais: 'RD' },
    { id: 3, nombre: 'Joan Gabriel', pais: 'USA' },
  ];
  selectedEmpleado: Empleados = new Empleados();
  agregarOEditar() {
    // Para agregar un ID
    this.selectedEmpleado.id = this.EmpleadoArray.length + 1;
    // Para agregar el nombre uy pais que apuntan en sus respectivos input
    this.EmpleadoArray.push(this.selectedEmpleado);
    // Para limpiar el formulario
    this.selectedEmpleado = new Empleados();
  }
}
