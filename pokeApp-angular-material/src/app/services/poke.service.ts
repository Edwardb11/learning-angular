import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokeService {
  // Inyectando el servicio de http client para hacer eso del mismo
  constructor(private http: HttpClient) {}

  // metodo para obtener informacion del endpoint
  getList() {
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
  }
  getPokeData(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}
