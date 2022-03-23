import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { tareasServices } from './../services/tarea.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
  constructor(private tareasServices: tareasServices) {}

  form = new FormGroup({
    actividad: new FormControl(''),
  });
  ngOnInit(): void {}
  get tareaID() {
    return this.tareasServices.tareas;
  }
  agregar() {
    if (this.form.invalid) return;

    this.tareasServices.agregarTarea({
      id: this.tareaID.length + 1,
      tarea: this.form.controls['actividad'].value,
      completada: false,
    });
  }
}
