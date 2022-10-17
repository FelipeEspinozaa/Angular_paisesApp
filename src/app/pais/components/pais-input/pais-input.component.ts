import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit{

  @Output() onEnter:    EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter(); //se ejecuta cuando se termina de escribir

  @Input() placeholder: string = "";

  debouncer: Subject<string> = new Subject();

  termino: string = "";

  constructor() { }
  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300))    //aca basicamente decimos, "no emitas el subscribe hasta que este Observable debouncer deje de emitur valores por los proximos 300 milesimas de segundos"
      .subscribe( valor => {
        this.onDebounce.emit( valor );
      })
  }

  buscar() {
    this.onEnter.emit( this.termino );
  }

  teclaPresionada() {
    this.debouncer.next( this.termino );  //next es para mandar el siguiente valor, y como esta suscrito el debounder se ejecutara lo que hay en el onInit
  }
  
}
