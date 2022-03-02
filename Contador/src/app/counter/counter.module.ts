import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonAddComponent } from './button-add/button-add.component';
import { ButtonDisComponent } from './button-dis/button-dis.component';
import { CounterComponent } from './counter.component';

@NgModule({
  declarations: [CounterComponent, ButtonAddComponent, ButtonDisComponent],
  imports: [CommonModule],
  exports: [CounterComponent],
})
export class CounterModule {}
