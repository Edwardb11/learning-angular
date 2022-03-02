import { Component, Input } from '@angular/core';

//decoradores
@Component({
  selector: 'app-contador',
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  contador: number = 0;
  handleCount(value: number) {
    this.contador = value;
  }
  handleCountLess(value: number) {
    this.contador = value;
  }
}
