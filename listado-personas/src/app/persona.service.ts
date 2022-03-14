import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './LoggingService.service';
import { Persona } from './persona.model';
import { DataService } from './data.service';

@Injectable()
export class PersonasService {
  personas: Persona[] = [
    new Persona('Juan', 'Perez'),
    new Persona('Laura', 'Juarez'),
  ];

  saludar = new EventEmitter<number>();

  constructor(
    private loggingService: LoggingService,
    private DataService: DataService
  ) {}

  agregarPersona(persona: Persona) {
    this.loggingService.enviaMensajeAConsola(
      'agregamos persona:' + persona.nombre
    );
    this.personas.push(persona);
    // Para guardar en el servicio de data service
    this.DataService.guardarPersonas(this.personas);
  }

  encontrarPersona(index: number) {
    let persona: Persona = this.personas[index];
    return persona;
  }

  modificarPersona(index: number, persona: Persona) {
    let persona1 = this.personas[index];
    persona1.nombre = persona.nombre;
    persona1.apellido = persona.apellido;
  }

  eliminarPersona(index: number) {
    this.personas.splice(index, 1);
  }
}
