import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable()
export class DataService {
  // inicializando el servicio de httpclient
  constructor(private http: HttpClient) {}
  // Guardar personas
  guardarPersonas(personas: Persona[]) {
    this.http
      .post(
        'https://listado-personas-3624c-default-rtdb.firebaseio.com/datos.json',
        personas
      )
      // Subscribirno para obtener una respuesta del metodo post
      .subscribe(
        (response) => {
          console.log('Resultado de guardar personas' + response);
        },
        (error) => {
          console.log('Error al guardar persona ' + error);
        }
      );
  }
}
