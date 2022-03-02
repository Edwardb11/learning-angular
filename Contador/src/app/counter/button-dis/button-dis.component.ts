import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-dis',
  templateUrl: './button-dis.component.html',
  styleUrls: ['./button-dis.component.css'],
})
export class ButtonDisComponent {
  @Input()
  contador: number = 0;
  @Output() onDis: EventEmitter<number> = new EventEmitter();

  Diss() {
    this.contador--;
    this.onDis.emit(this.contador);
  }
}
