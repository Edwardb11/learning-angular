import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactive',
  templateUrl: './formulario-reactive.component.html',
  styleUrls: ['./formulario-reactive.component.css'],
})
export class FormularioReactiveComponent implements OnInit {
  MiFormulario: FormGroup = new FormGroup({
    proyecto: new FormControl(''),
    horas: new FormControl(0),
    tecnologias: new FormControl(''),
  });
  constructor() {}

  ngOnInit(): void {}
}
