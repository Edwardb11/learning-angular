import { Component } from '@angular/core';

//decoradores
@Component({
  selector: 'app-contador',
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  contador: number = 0;
  add() {
    this.contador++;
  }
  less() {
    this.contador--;
  }
}
