import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-formulario-reactive',
  templateUrl: './formulario-reactive.component.html',
  styleUrls: ['./formulario-reactive.component.css'],
})
export class FormularioReactiveComponent implements OnInit {
  MiFormulario: FormGroup = this.fb.group({
    proyecto: this.fb.control('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    horas: new FormControl(0, [
      Validators.required,
      Validators.min(1),
      Validators.max(50),
    ]),
    tecnologias: new FormControl(''),
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
