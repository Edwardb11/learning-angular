import { Component, OnInit } from '@angular/core';
import { ProyectoDataService } from './service/proyecto-data.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss'],
})
export class ProyectosComponent implements OnInit {
  constructor(private proyectoDataService: ProyectoDataService) {}

  ngOnInit(): void {}

  get data() {
    return this.proyectoDataService.data;
  }
}
