import { Component } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css'],
})
export class PersonasComponent {
  deshabilitar = false;
  mensaje = 'No se ha agregado ninguna persona';
  titulo = '';
  mostrar = false;
  agregarPersona() {
    this.mostrar = true;

    this.mensaje = 'Persona agregada';
  }
  // modificarTitulo(event: Event) {
  //   console.log('entrando a metodo ');
  //   this.titulo = (<HTMLInputElement>event.target).value;
  // }
}
