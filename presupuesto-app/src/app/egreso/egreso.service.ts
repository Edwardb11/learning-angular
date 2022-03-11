import { Egreso } from './egreso.model';
export class EgresoServicio {
  egresos: Egreso[] = [
    new Egreso('Renta departamento', 900),
    new Egreso('Ropa', 500),
  ];
  Eliminar(egreso: Egreso) {
    // retornar el indice del ingreso que nos mandan
    const indice: number = this.egresos.indexOf(egreso);
    // borrar el indice del elemento que queremos eliminar
    this.egresos.splice(indice, 1);
  }
}
