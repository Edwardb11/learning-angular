import { Component, OnInit } from '@angular/core';
import { Observable, interval, filter, take, map } from 'rxjs';

@Component({
  selector: 'app-reactive-container',
  templateUrl: './reactive-container.component.html',
  styleUrls: ['./reactive-container.component.css'],
})
export class ReactiveContainerComponent implements OnInit {
  // Interval integtrado de RXJS

  miIntervalo: Observable<number> = interval(100).pipe(
    // funcion para tranformar el valor inicial
    map((value) => value + 1),
    // filtrar
    filter((value) => value % 2 == 0),
    // se trata de decir cuantas veces se ejecutara el filtro\
    take(5)
  );

  constructor() {
    // let numero = 0;
    // const miObservable = new Observable<number>((observer) => {
    //   setInterval(() => {
    //     numero++;
    //     observer.next(numero);
    //     observer.complete();
    //     if (numero == 3) {
    //       observer.error('Numero error');
    //     }
    //   }, 3000);
    // });
    // Legacy
    // llamar al observable
    // miObservable.subscribe(
    //   (res) => {
    //     console.log(res);
    //   },
    //   (error) => {
    //     console.log(error);
    //   },
    //   // completado
    //   () => {
    //     console.log('Observable completado');
    //   }
    // );
    // Forma moderna
    // miObservable.subscribe({
    //   next: (res) => {
    //     console.log(res);
    //   },
    //   error: (error) => {
    //     console.log(error);
    //   },
    //   complete: () => {
    //     console.log('Observable completado');
    //   },
    // });
  }

  ngOnInit(): void {
    this.miIntervalo.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('Estos son los primeros 5 numeros pares'),
    });
  }
}
