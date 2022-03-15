import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona.model';
import { LoggingService } from '../LoggingService.service';
import { PersonasService } from '../personas.service';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css'],
})
export class PersonasComponent implements OnInit {
  personas: Persona[] = [];

  constructor(
    private loggingService: LoggingService,
    private personasService: PersonasService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.personasService
      .obtenerPersonas()

      .subscribe((personas1: any) => {
        //Cargamos los datos de la base de datos al arreglo de personas local
        this.personas = personas1;
        this.personasService.setPersonas(this.personas);
        console.log('obtener personas suscriber:' + personas1);
      });
  }

  irAgregar() {
    console.log('nos vamos a agregar ');
    this.router.navigate(['./personas/agregar'], {
      queryParams: { modoEdicion: 0 },
    });
  }
}
