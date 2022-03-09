import {
  Component,
  ElementRef,
  EventEmitter,
  ViewChild,
  OnInit,
} from '@angular/core';
import { Persona } from './../persona.model';
import { LoggingService } from './../LoggingService.service';
import { PersonasService } from './../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  // // Salida de datos de componente hijo a componente padre
  // @Output() personaCreada = new EventEmitter();
  // nombreInput: string = '';
  // apellidoInput: string = '';
  @ViewChild('NombreInput') nombreInput: ElementRef;
  @ViewChild('ApellidoInput') apellidoInput: ElementRef;
  // crear instancia atravez del constructor
  constructor(
    private LoggingService: LoggingService,
    private PersonasService: PersonasService
  ) {
    this.PersonasService.saludar.subscribe((indice: number) =>
      alert('El indice es: ' + indice)
    );
  }

  ngOnInit(): void {}
  agregarPersona() {
    let persona1 = new Persona(
      this.nombreInput.nativeElement.value,
      this.apellidoInput.nativeElement.value
    );
    // this.LoggingService.EnviaMensaheAConsola(
    //   'Enviamos una persona' +
    //     'Nombre: ' +
    //     persona1.nombre +
    //     ' Apellido: ' +
    //     persona1.apellido
    // );
    // this.personas.push(persona1);
    // ahora podemos propagar informacion al componente padre
    // this.personaCreada.emit(persona1);
    // utilizar el servicio
    this.PersonasService.AgregarPersona(persona1);
  }
}
