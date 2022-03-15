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

  // iniciar la pagina en 0
  page: number = 0;

  // utilizando el servicio
  constructor(private PokeService: PokeService) {
    this.setData();
  }
  setData() {
    // llamamos al metodo que creamos
    //  este peticion nos retorna un observable rjx y nos subscribimos y nos permite pasarle una funcion flecha para la respuesta
    this.PokeService.getList(this.page).subscribe((res: any) => {
      this.pokeList = res.results;
    });
  }
  nextPage() {
    this.page += 8;
    this.setData();
  }

  prevPage() {
    this.page -= 8;
    this.setData();
  }
}
