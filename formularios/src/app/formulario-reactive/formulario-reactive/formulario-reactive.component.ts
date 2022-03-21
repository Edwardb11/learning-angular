import { Component, OnInit } from '@angular/core';
import {
  FormArray,
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
    horas: new FormControl(1, [
      Validators.required,
      Validators.min(1),
      Validators.max(50),
    ]),
    tecnologias: this.fb.array([]),
  });
  tecnologia: FormControl = this.fb.control('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(25),
  ]);

  proyectos: any[] = [];
  // obtener el arreglo  que tiene las validaciones d tecnologias
  get tecnologias() {
    return this.MiFormulario.get('tecnologias') as FormArray;
  }
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
  validar() {
    return this.MiFormulario.invalid && this.MiFormulario.touched;
  }
  agregarTecnologia() {
    // validar las tecnologias
    if (this.tecnologia.invalid) {
      this.MiFormulario.markAllAsTouched();
      return;
    }
    // agregar las tecnologias
    this.tecnologias.push(this.fb.control(this.tecnologia.value));
    console.log(this.tecnologia.value);
    this.tecnologia.reset();
  }
  agregarProyectos() {
    if (this.MiFormulario.invalid) {
      this.MiFormulario.markAllAsTouched();
      return;
    }
    this.proyectos.push(this.MiFormulario.value);
    console.log(this.MiFormulario.value);
    this.MiFormulario.reset();
    this.tecnologias.clear();
  }
}
