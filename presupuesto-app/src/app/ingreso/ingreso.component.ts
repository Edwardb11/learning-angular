import { Component, OnInit } from '@angular/core';
import { IngresoServicio } from './ingreso.service';
import { Ingreso } from './ingreso.model';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css'],
})
export class IngresoComponent implements OnInit {
  // Inicializar ingresos
  ingresos: Ingreso[] = [];
  // inicializar el servicio de los ingresos
  constructor(private IngresoServicio: IngresoServicio) {}

  // asignar a los servicio los ingresos
  ngOnInit(): void {
    this.ingresos = this.IngresoServicio.ingresos;
  }
  EliminarRegistro(ingreso: Ingreso) {
    // aqui usamos el metodo eliminar que creamos en nuestro servicio
    this.IngresoServicio.Eliminar(ingreso);
  }
}
