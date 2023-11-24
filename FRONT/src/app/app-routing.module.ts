import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarTarefasComponent } from './listar-tarefas/listar-tarefas.component';
import { ListarCadastrarComponent } from './listar-cadastrar/listar-cadastrar.component';
import { ListarConcluidasComponent } from './listar-concluidas/listar-concluidas.component';
import { ListarNaoconcluidasComponent } from './listar-naoconcluidas/listar-naoconcluidas.component';

const routes: Routes = [
  {
    path: "pages/tarefas/listar",
    component: ListarTarefasComponent,
  },

  {
    path: "pages/tarefas/cadastrar",
    component: ListarCadastrarComponent,
  },
  {
    path: "pages/tarefas/listarconcluidas",
    component: ListarConcluidasComponent,
  },
  {
    path: "pages/tarefas/listarnaoconcluidas",
    component: ListarNaoconcluidasComponent,
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
