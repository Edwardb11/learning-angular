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
  constructor() {}

  ngOnInit(): void {}
  agregar() {
    console.log(this.miFormulario.value);
  }
}
