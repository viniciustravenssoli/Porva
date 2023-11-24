import { Categoria } from "./Categoria";

export interface Tarefa {
    tarefaId: number;
    titule?: string;
    descricao?: string;
    CriadoEm?: string;
    categoriaId : number;
    categoria ?: Categoria;
    status ?: string;
  }