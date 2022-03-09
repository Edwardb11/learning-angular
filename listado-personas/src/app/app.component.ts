import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { LoggingService } from './LoggingService.service';
import { PersonasService } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  titulo = 'Listado de Personas';
  personas: Persona[] = [];
  constructor(
    private LoggingService: LoggingService,
    private PersonasService: PersonasService
  ) {}
  // inicializar en esta interfaz
  ngOnInit(): void {
    this.personas = this.PersonasService.personas;
  }
  // personaAgregada(persona: Persona) {
  //   // this.personas.push(persona);
  //   this.PersonasService.AgregarPersona(persona);
  // }
}
