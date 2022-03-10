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
    { id: 1, nombre: 'Jose Daniel', pais: 'RD' },
  ];
}
