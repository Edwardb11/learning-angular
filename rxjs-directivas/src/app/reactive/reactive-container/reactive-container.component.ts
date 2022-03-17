import { Component, OnInit } from '@angular/core';
import { observable, Observable, observeOn } from 'rxjs';

@Component({
  selector: 'app-reactive-container',
  templateUrl: './reactive-container.component.html',
  styleUrls: ['./reactive-container.component.css'],
})
export class ReactiveContainerComponent implements OnInit {
  constructor() {
    let numero = 0;
    const miObservable = new Observable<number>((observer) => {
      setInterval(() => {
        numero++;
        observer.next(numero);
        observer.complete();
        if (numero == 3) {
          observer.error('Numero error');
        }
      }, 3000);
    });

    // llamar al observable
    miObservable.subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      },
      // completado
      () => {
        console.log('Observable completado');
      }
    );
  }

  ngOnInit(): void {}
}
