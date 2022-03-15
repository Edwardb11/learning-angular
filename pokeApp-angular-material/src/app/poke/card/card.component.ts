import { Component, Input, OnInit } from '@angular/core';
import { PokeService } from './../../services/poke.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
})
export class CardComponent implements OnInit {
  @Input()
  info: any;
  url: string = '';
  constructor(private PokeService: PokeService) {}
  // el ngOnInit espera que cargue todo y luego va a disparar en caso que haya que esperar que cargue algo por eso obtenemos la imagen ahi en vez de nen el constructor
  ngOnInit(): void {
    // le pasamos el nombre a nuestra peticion http y nos suscribimos para ver la respuesta
    this.PokeService.getPokeData(this.info.name).subscribe((res: any) => {
      this.url = res.sprites.front_default;
    });
  }
}
