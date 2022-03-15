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
    // llamamos al metodo que creamos
    //  este peticion nos retorna un observable rjx y nos subscribimos y nos permite pasarle una funcion flecha para la respuesta
    PokeService.getList().subscribe((res: any) => {
      this.pokeList = res.results;
      // console.log(res);
    });
  }
  nextPage() {
    this.page += 8;
    this.PokeService.getList(this.page).subscribe((res: any) => {
      this.pokeList = res.results;
    });
  }
  prevPage() {
    this.page -= 8;
    this.PokeService.getList(this.page).subscribe((res: any) => {
      this.pokeList = res.results;
    });
  }
}
