import { Component } from '@angular/core';
import { PokeService } from './../../services/poke.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.sass'],
})
export class GridComponent {
  // para almacenar lo que nos retorna el observable del servicio de la peticion get
  pokeList: Array<any> = [];
  // utilizando el servicio
  constructor(private PokeService: PokeService) {
    // llamamos al metodo que creamos
    //  este peticion nos retorna un observable rjx y nos subscribimos y nos permite pasarle una funcion flecha para la respuesta
    PokeService.getList().subscribe((res: any) => {
      console.log(res);
    });
  }
}
