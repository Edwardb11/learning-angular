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
    completada: new FormControl(false),
  });
  ngOnInit(): void {}
  agregar() {
    if (this.form.invalid) return;
    console.warn(this.form.value);
    const task = this.form.value;
    this.tareasServices.agregarTarea({
      tarea: this.form.controls['actividad'].value,
      completada: false,
    });
  }
}
