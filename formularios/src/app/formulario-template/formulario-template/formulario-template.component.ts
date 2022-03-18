import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario-template',
  templateUrl: './formulario-template.component.html',
  styleUrls: ['./formulario-template.component.css'],
})
export class FormularioTemplateComponent implements OnInit {
  //  decirador que me pide un selector que me pide una referencia local
  @ViewChild('miFormulario')
  miFormulario!: NgForm;
  tecnologias: Array<string> = [];
  proyectos: any[] = [];
  // Two-way binding

  initialState = {
    proyecto: '',
    horas: 0,
    tecnologia: '',
  };
  constructor() {}
  ngOnInit(): void {}
  agregar() {
    if (this.miFormulario.invalid) {
      return;
    }
    this.proyectos.push({
      proyecto: this.miFormulario.controls['proyecto'].value,
      horas: this.miFormulario.controls['horas'].value,
      tecnologias: this.tecnologias,
    });

    this.miFormulario.resetForm();
    this.tecnologias = [];
    console.log('aa');
  }
  agregarTec() {
    if (this.miFormulario.controls['tecnologia'].invalid) {
      return;
    }
    this.tecnologias.push(this.miFormulario.controls['tecnologia'].value);
    console.log(this.tecnologias);
    this.miFormulario.resetForm({
      ...this.miFormulario.value,
      tecnologia: '',
    });
  }
}
