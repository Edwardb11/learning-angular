import { Component, OnInit } from '@angular/core';
import { IngresoServicio } from './../ingreso/ingreso.service';
import { EgresoServicio } from './../egreso/egreso.service';
import { Ingreso } from '../ingreso/ingreso.model';
import { Egreso } from '../egreso/egreso.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  tipo: string = 'ing';
  descripcionInput: string;
  valorInput: number;
  constructor(
    private IngresoServicio: IngresoServicio,
    private EgresoServicio: EgresoServicio
  ) {}

  ngOnInit(): void {}
  tipoOperacion(evento: any) {
    this.tipo = evento.target.value;
  }
  agregarValor() {
    if (this.tipo === 'ing') {
      this.IngresoServicio.ingresos.push(
        new Ingreso(this.descripcionInput, this.valorInput)
      );
    } else {
      this.EgresoServicio.egresos.push(
        new Egreso(this.descripcionInput, this.valorInput)
      );
    }
  }
}
