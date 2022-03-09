import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
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
  @ViewChild('NombreInput') nombreInput: ElementRef;
  @ViewChild('ApellidoInput') apellidoInput: ElementRef;

  agregarPersona() {
    let persona1 = new Persona(
      this.nombreInput.nativeElement.value,
      this.apellidoInput.nativeElement.value
    );
    // this.personas.push(persona1);
    // ahora podemos propagar informacion al componente padre
    this.personaCreada.emit(persona1);
  }
}
