import { Component } from '@angular/core';
import { Ingreso } from './ingreso/ingreso.model';
import { Egreso } from './egreso/egreso.model';
import { IngresoServicio } from './ingreso/ingreso.service';
import { EgresoServicio } from './egreso/egreso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  ingresos: Ingreso[] = [];
  egresos: Egreso[] = [];

  // Inyectando los servicios
  constructor(
    private IngresoServicio: IngresoServicio,
    EgresoServicio: EgresoServicio
  ) {
    this.ingresos = IngresoServicio.ingresos;
    this.egresos = EgresoServicio.egresos;
  }

  getIngresoTotal() {
    let ingresoTotal: number = 0;
    // para recorrer todos los valores y obtener la suma de los ingresos
    this.ingresos.forEach((ingreso) => {
      ingresoTotal += ingreso.valor;
    });
    return ingresoTotal;
  }
  getEgresoTotal() {
    let EgresoTotal: number = 0;
    // para recorrer todos los valores y obtener la suma de los egresos
    this.egresos.forEach((egreso) => {
      EgresoTotal += egreso.valor;
    });
    return EgresoTotal;
  }
  getPorcentajeTotal() {
    return this.getEgresoTotal() / this.getIngresoTotal();
  }
  getPresupuestoTotal() {
    return this.getIngresoTotal() - this.getEgresoTotal();
  }
}
