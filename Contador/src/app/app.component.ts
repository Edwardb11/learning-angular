import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  contador: number = 0;
  add() {
    this.contador++;
  }
  less() {
    this.contador--;
  }
}
