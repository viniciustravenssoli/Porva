import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../Models/Terefa';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listar-naoconcluidas',
  templateUrl: './listar-naoconcluidas.component.html',
  styleUrls: ['./listar-naoconcluidas.component.css']
})
export class ListarNaoconcluidasComponent implements OnInit {

  tarefas!: Tarefa[];

  constructor(private client: HttpClient) {}

  ngOnInit(): void {
    this.client
      .get<Tarefa[]>("https://localhost:7015/api/tarefa/naoconcluidas")
      .subscribe({
        next: (tarefas) => {
          console.log(tarefas);
          this.tarefas = tarefas;
        },
        error: (erro) => {
          console.log(erro);
        },
      });
  }

}
