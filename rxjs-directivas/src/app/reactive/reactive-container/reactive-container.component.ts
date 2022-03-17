import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-container',
  templateUrl: './reactive-container.component.html',
  styleUrls: ['./reactive-container.component.css'],
})
export class ReactiveContainerComponent implements OnInit {
  numero = 0;
  miObservable = new Observable<number>(() => {
    setInterval(() => {
      this.numero++;
    }, 3000);
  });
  constructor() {}

  ngOnInit(): void {}
}
