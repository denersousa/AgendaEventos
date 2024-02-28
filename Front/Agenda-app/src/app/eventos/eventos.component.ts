import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.scss'
})
export class EventosComponent implements OnInit {
public eventos: any = [];
public eventosFiltrados: any = [];
public exibirImg: boolean = true;
private _filtroLista: string = '';

public get filtroLista(): string{
  return this._filtroLista
}

public set filtroLista(value: string){
  this._filtroLista = value;
  this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;
}

filtrarEventos(filtrarPor: string): any{
   filtrarPor = filtrarPor.toLocaleLowerCase();
  return this.eventos.filter(
    (x: any) => x.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
    x.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1
  )
}

constructor( private http: HttpClient){}
  ngOnInit(): void {
    this.obterEventos();

  }

  obterEventos() {
    this.http.get('http://localhost:5000/api/eventos').subscribe(
      (result) => {
        this.eventos = result;
        this.eventosFiltrados = result;
      }, (error) => {
        console.log('Erro ao obter eventos:', error)
      }
    );
  }

  mostrarImg() {
    this.exibirImg = !this.exibirImg
  }
}
