import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.scss'
})
export class EventosComponent implements OnInit {
public eventos: any ;

constructor( private http: HttpClient){}
ngOnInit(): void {
  this.ObterEventos();

}

ObterEventos() {
  this.http.get('http://localhost:5000/api/eventos').subscribe((result) => {
    console.log(result);
    this.eventos = result;
  })

}
}
