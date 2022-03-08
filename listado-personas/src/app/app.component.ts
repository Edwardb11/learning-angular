import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Listado de personas';
  personas: Persona[] = [
    new Persona('Edward', 'Brito'),
    new Persona('Frank', 'Brito'),
  ];
}
