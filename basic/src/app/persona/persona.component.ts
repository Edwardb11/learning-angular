import { NumberSymbol } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
})
export class PersonaComponent {
  nombre: string = 'Edward';
  apellido: string = 'Brito';
  edad: number = 20;

  // atributos privados
  // private edad: number = 20;
  // getEdad(): number {
  //   return this.edad;
  // }
}
