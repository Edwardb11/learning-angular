import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { tareasServices } from './../services/tarea.service';
import { Tarea } from './../interface/tarea.interface';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
  @ViewChild('miFormulario')
  miFormulario!: NgForm;
  initialState = {
    actividad: '',
    completada: false,
  };
  constructor(private tareasServices: tareasServices) {}
  ngOnInit(): void {}
  agregar() {
    if (this.miFormulario.invalid) {
      return;
    }

    this.tareasServices.agregarTarea(
      this.miFormulario.controls['actividad'].value,
      false
    );
    console.log(this.miFormulario.value);
  }
}
