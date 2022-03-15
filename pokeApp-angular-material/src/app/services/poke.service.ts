import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokeService {
  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
  // Inyectando el servicio de http client para hacer eso del mismo
  constructor(private http: HttpClient) {}

  // metodo para obtener informacion del endpoint
  getList(page: number = 0) {
    return this.http.get(`${this.baseUrl}`, {
      // paso de parametros a los limites y offset que tenia en este caso solo offset
      params: {
        offset: page,
        limit: 10,
      },
    });
  }
  getPokeData(name: string) {
    return this.http.get(`${this.baseUrl}${name}`);
  }
}
