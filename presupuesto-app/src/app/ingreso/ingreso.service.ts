import { Ingreso } from './ingreso.model';
export class IngresoServicio {
  ingresos: Ingreso[] = [
    new Ingreso('Salario', 4000),
    new Ingreso('Venta coche', 500),
  ];
  Eliminar(ingreso: Ingreso) {
    // retornar el indice del ingreso que nos mandan
    const indice: number = this.ingresos.indexOf(ingreso);
    // borrar el indice del elemento que queremos eliminar
    this.ingresos.splice(indice, 1);
  }
}
