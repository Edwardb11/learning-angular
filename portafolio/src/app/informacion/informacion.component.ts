import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.scss'],
})
export class InformacionComponent implements OnInit {
  parametro: string = '';
  constructor(private activatedRoute: ActivatedRoute) {
    let id = '';
    activatedRoute.params.subscribe(({ id: nombreProyecto }) => {
      id = nombreProyecto;
    });
    this.parametro = decodeURI(id);
  }

  ngOnInit(): void {}
}
