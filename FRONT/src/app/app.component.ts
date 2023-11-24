import { Component } from '@angular/core';
import { ListarConcluidasComponent } from './listar-concluidas/listar-concluidas.component';

@Component({
  selector: 'app-root',
  template: 
  `
  <nav>
  <a routerLink="pages/tarefas/listar">Listar Tarefas</a>
  <a routerLink="pages/tarefas/cadastrar">Cadastrar Tarefas</a>
  <a routerLink="pages/tarefas/listarconcluidas">Listar Tarefas Concluidas</a>
  <a routerLink="pages/tarefas/listarnaoconcluidas">Listar Tarefas Nao ListarConcluidasComponent</a>

  </nav>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'Front';
}
