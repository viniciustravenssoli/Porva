import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarTarefasComponent } from './listar-tarefas/listar-tarefas.component';
import { ListarCadastrarComponent } from './listar-cadastrar/listar-cadastrar.component';
import { FormsModule } from "@angular/forms";
import { ListarConcluidasComponent } from './listar-concluidas/listar-concluidas.component';
import { ListarNaoconcluidasComponent } from './listar-naoconcluidas/listar-naoconcluidas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarTarefasComponent,
    ListarCadastrarComponent,
    ListarConcluidasComponent,
    ListarNaoconcluidasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
