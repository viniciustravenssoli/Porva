import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Categoria } from '../Models/Categoria';
import { Target } from '@angular/compiler';
import { Tarefa } from '../Models/Terefa';

@Component({
  selector: 'app-listar-cadastrar',
  templateUrl: './listar-cadastrar.component.html',
  styleUrls: ['./listar-cadastrar.component.css']
})
export class ListarCadastrarComponent implements OnInit {

  categorias : Categoria[] = []

  categoriaId! : number;
  descricao!: string;
  titulo!: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Categoria[]>("https://localhost:7015/api/categoria/listar")
    .subscribe({
      next : (categorias) => {
        console.log(categorias);
        this.categorias = categorias;
      },
      error : (erro) => {
        console.log(erro);
      }
    })
  }

  cadastrar() : void {
    let tarefa : Tarefa = {
      categoriaId: this.categoriaId,
      tarefaId: 0,
      descricao: this.descricao,
      titule: this.titulo,
      status: ""
      
    }

    this.http.post<Tarefa>("https://localhost:7015/api/tarefa/cadastrar", tarefa)
    .subscribe({
      next: (tarefa) => {

      },
      error : (erro) => {
        console.log(erro);
      }
    })
  }

}
