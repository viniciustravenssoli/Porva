import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../Models/Terefa';

@Component({
  selector: 'app-listar-tarefas',
  templateUrl: './listar-tarefas.component.html',
  styleUrls: ['./listar-tarefas.component.css']
})
export class ListarTarefasComponent implements OnInit {


  tarefas !: Tarefa[];
  tarefa !: Tarefa;

  constructor(private client: HttpClient) { }


  ngOnInit(): void {
    this.client
    .get<Tarefa[]>("https://localhost:7015/api/tarefa/listar")
    .subscribe({
      next: (tarefas) => {
        console.log(tarefas);
        this.tarefas = tarefas;
      },
      error: (erro) => {
        console.log(erro);
      }
    });
}

delete(id: number): void {
  
  this.client.put<Tarefa>(`https://localhost:7015/api/tarefa/alterar/${id}`, this.tarefa)
    .subscribe({
      next: (employee) => {
        this.ngOnInit()
      },
      error: (erro) => {
        console.log(erro);
      }
    });
}

}
