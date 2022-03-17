import { Component, OnInit } from '@angular/core';
import { Observable, interval, observable } from 'rxjs';

@Component({
  selector: 'app-reactive-container',
  templateUrl: './reactive-container.component.html',
  styleUrls: ['./reactive-container.component.css'],
})
export class ReactiveContainerComponent implements OnInit {
  // Interval integtrado de RXJS

  miIntervalo: Observable<number> = interval(3000);

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
    this.miIntervalo.subscribe((value) => console.log(value));
  }
}
