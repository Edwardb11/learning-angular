import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-dis',
  templateUrl: './button-dis.component.html',
  styleUrls: ['./button-dis.component.sass'],
})
export class ButtonDisComponent {
  @Input()
  contador: number = 0;
  @Output() onAdd: EventEmitter<number> = new EventEmitter();

  less() {
    this.contador--;
    this.onAdd.emit(this.contador);
  }
}
