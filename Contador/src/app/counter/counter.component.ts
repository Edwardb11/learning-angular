import { Component, Input } from '@angular/core';

//decoradores
@Component({
  selector: 'app-contador',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  contador: number = 0;
  handleCount(value: number) {
    this.contador = value;
  }
  handleCountDiss(value: number) {
    this.contador = value;
  }
}
