import { Component, EventEmitter, Output } from '@angular/core';
import { Persona } from './../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  // Salida de datos de componente hijo a componente padre
  @Output() personaCreada = new EventEmitter();
  // nombreInput: string = '';
  // apellidoInput: string = '';

  agregarPersona(
    NombreInput: HTMLInputElement,
    ApellidoInput: HTMLInputElement
  ) {
    let persona1 = new Persona(NombreInput.value, ApellidoInput.value);
    // this.personas.push(persona1);
    // ahora podemos propagar informacion al componente padre
    this.personaCreada.emit(persona1);
  }
}
