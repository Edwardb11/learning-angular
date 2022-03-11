import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoServicio } from './egreso.service';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css'],
})
export class EgresoComponent implements OnInit {
  egresos: Egreso[] = [];
  @Input() ingresoTotal: number;
  constructor(private EgresoServicio: EgresoServicio) {}

  ngOnInit(): void {
    this.egresos = this.EgresoServicio.egresos;
  }
  EliminarEgresos(egresos: Egreso) {
    this.EgresoServicio.Eliminar(egresos);
  }
  calcularPorcentaje(egresos: Egreso) {
    return egresos.valor / this.ingresoTotal;
  }
}
