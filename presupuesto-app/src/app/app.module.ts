import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { CabeceroComponent } from './cabecero/cabecero.component';
import { EgresoComponent } from './egreso/egreso.component';
import { FormularioComponent } from './formulario/formulario.component';
import { EgresoServicio } from './egreso/egreso.service';
import { IngresoServicio } from './ingreso/ingreso.service';

@NgModule({
  declarations: [
    AppComponent,
    IngresoComponent,
    CabeceroComponent,
    EgresoComponent,
    FormularioComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [IngresoServicio, EgresoServicio],
  bootstrap: [AppComponent],
})
export class AppModule {}
