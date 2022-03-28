import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProyectoDataService } from './../proyectos/service/proyecto-data.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.scss'],
})
export class InformacionComponent implements OnInit {
  // parametro para obtener el router activo
  parametro: string = '';

  // Objecto
  proyectoData: any = {};
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private proyectoDataService: ProyectoDataService
  ) {
    let id = '';
    activatedRoute.params.subscribe(({ id: nombreProyecto }) => {
      id = nombreProyecto;
    });
    this.parametro = decodeURI(id);
  }

  ngOnInit(): void {
    this.proyectoData = this.proyectoDataService.getProyecto(this.parametro);
  }
  goProyectos() {
    this.router.navigate(['/proyectos']);
  }
}
