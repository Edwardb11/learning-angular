import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioReactiveComponent } from './formulario-reactive/formulario-reactive.component';

@NgModule({
  declarations: [FormularioReactiveComponent],
  imports: [CommonModule],
  exports: [FormularioReactiveComponent],
})
export class FormularioReactiveModule {}
