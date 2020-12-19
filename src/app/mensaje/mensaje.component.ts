import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent implements OnInit {

  constructor() { }

  @Input()
  cantidadPersonas:number

  @Input()
  tipo:string

  @Input()
  mensaje:string

  @Output()
  cerrar:EventEmitter<boolean> = new EventEmitter();

  ngOnInit(): void {
  }

  setBackground(){
    return{
        'info': this.tipo == "info"
       ,'warning': this.tipo == "warning"
       ,'error': this.tipo == "error"
    }
  }

  CerrarMensaje(){
    this.cerrar.emit(true);
  }

}
