import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactive',
  templateUrl: './formulario-reactive.component.html',
  styleUrls: ['./formulario-reactive.component.css'],
})
export class FormularioReactiveComponent implements OnInit {
  MiFormulario: FormGroup = this.fb.group({
    proyecto: new FormControl(''),
    horas: new FormControl(0),
    tecnologias: new FormControl(''),
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
