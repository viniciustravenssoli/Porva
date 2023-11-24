import { Component, OnInit } from "@angular/core";
import { Tarefa } from "../Models/Terefa";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-listar-concluidas",
  templateUrl: "./listar-concluidas.component.html",
  styleUrls: ["./listar-concluidas.component.css"],
})
export class ListarConcluidasComponent implements OnInit {
  tarefas!: Tarefa[];

  constructor(private client: HttpClient) {}

  ngOnInit(): void {
    this.client
      .get<Tarefa[]>("https://localhost:7015/api/tarefa/concluidas")
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
