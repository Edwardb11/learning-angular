import { Persona } from './persona.model';
import { LoggingService } from './LoggingService.service';
import { EventEmitter, Injectable } from '@angular/core';
// para inyectar un servicio dentro de un servicio
@Injectable()
export class PersonasService {
  personas: Persona[] = [
    new Persona('Juan', 'Perez'),
    new Persona('Laura', 'Juarez'),
    new Persona('Karla', 'Lara'),
  ];
  saludar = new EventEmitter<number>();
  constructor(private LoggingService: LoggingService) {}
  AgregarPersona(persona: Persona) {
    this.LoggingService.EnviaMensaheAConsola(
      'Enviamos una persona' + 'Nombre: ' + persona.nombre
    );
    this.personas.push(persona);
  }
}
