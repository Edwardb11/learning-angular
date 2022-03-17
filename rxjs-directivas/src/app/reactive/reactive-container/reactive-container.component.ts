import { Component, OnInit, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
// import { Observable, interval, filter, take, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-reactive-container',
  templateUrl: './reactive-container.component.html',
  styleUrls: ['./reactive-container.component.css'],
})
export class ReactiveContainerComponent implements OnInit, OnDestroy {
  suscriptor: Subscription | null = null;
  // FromEvent
  x: number = 0;
  y: number = 0;
  ngOnInit(): void {
    const obs = fromEvent<MouseEvent>(
      document.querySelector('#area')!,
      'mousemove'
    );
    obs.subscribe((ev) => {
      console.log('evento');
      this.x = ev.clientX;
      this.y = ev.clientY;
    });
  }
  ngOnDestroy(): void {
    this.suscriptor?.unsubscribe();
  }

  // // Interval integtrado de RXJS
  // miIntervalo: Observable<number> = interval(100).pipe(
  //   // funcion para tranformar el valor inicial
  //   map((value) => value + 1),
  //   // filtrar
  //   filter((value) => value % 2 == 0),
  //   // se trata de decir cuantas veces se ejecutara el filtro\
  //   take(5)
  // );
  // miSubscription: Subscription | null = null;
  // constructor() {
  //   // let numero = 0;
  //   // const miObservable = new Observable<number>((observer) => {
  //   //   setInterval(() => {
  //   //     numero++;
  //   //     observer.next(numero);
  //   //     observer.complete();
  //   //     if (numero == 3) {
  //   //       observer.error('Numero error');
  //   //     }
  //   //   }, 3000);
  //   // });
  //   // Legacy
  //   // llamar al observable
  //   // miObservable.subscribe(
  //   //   (res) => {
  //   //     console.log(res);
  //   //   },
  //   //   (error) => {
  //   //     console.log(error);
  //   //   },
  //   //   // completado
  //   //   () => {
  //   //     console.log('Observable completado');
  //   //   }
  //   // );
  //   // Forma moderna
  //   // miObservable.subscribe({
  //   //   next: (res) => {
  //   //     console.log(res);
  //   //   },
  //   //   error: (error) => {
  //   //     console.log(error);
  //   //   },
  //   //   complete: () => {
  //   //     console.log('Observable completado');
  //   //   },
  //   // });
  // }
  // ngOnInit(): void {
  //   // asignar la subscripcion a mi variable
  //   this.miSubscription = this.miIntervalo.subscribe({
  //     next: (value) => console.log(value),
  //     complete: () => console.log('Estos son los primeros 5 numeros pares'),
  //   });
  // }
  // // destruir componentes
  // ngOnDestroy() {
  //   // utilizar referencia de la subscricion
  //   this.miSubscription!.unsubscribe();
  //   console.log('Componente destruido');
  // }
}
