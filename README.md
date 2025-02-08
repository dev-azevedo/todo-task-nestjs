Task API - NestJS & TypeORM By:[@dev-azevedo](https://linkedin.com//in/dev-azevedo)

Descrição

Este projeto é uma API RESTful de gerenciamento de tarefas (CRUD) desenvolvida com NestJS e TypeORM. Ele permite criar, listar, atualizar e excluir tarefas em um banco de dados SQLite.

Tecnologias Utilizadas

NestJS

TypeORM

SQLite

Instalação

Clone o repositório:

git clone todo-task-nestjs
cd todo-task-nestjs

Instale as dependências:

npm install

Configure as variáveis de ambiente no arquivo .env:

DATABASE_TYPE=sqlite
DATABASE_DATABASE=database.sqlite

Execute as migrações do banco de dados:

npm run typeorm migration:run

Inicie a aplicação:

npm run start:dev

Endpoints

Obter todas as tarefas

GET http://localhost:3000/tasks?page=1&limit=10

Resposta:

[
    {
        "id": 1,
        "title": "Task 1",
        "description": "Description of Task 1",
        "status": 1
    }
]

Obter uma tarefa por ID

GET http://localhost:3000/tasks/1

Resposta:

{
    "id": 1,
    "title": "Task 1",
    "description": "Description of Task 1",
    "status": 1
}

Criar uma nova tarefa

POST http://localhost:3000/tasks
Content-Type: application/json

Body:

{
    "title": "Task 21",
    "description": "Task 1 description"
}

Resposta:

{
    "id": 21,
    "title": "Task 21",
    "description": "Task 1 description",
    "status": 0
}

Atualizar uma tarefa

PATCH http://localhost:3000/tasks/1
Content-Type: application/json

Body:

{
    "status": 3
}

Resposta:

{
    "id": 1,
    "title": "Task 1",
    "description": "Description of Task 1",
    "status": 3
}

Excluir uma tarefa

DELETE http://localhost:3000/tasks/3

Resposta:

{
    "message": "Task deleted successfully"
}

Estrutura do Banco de Dados

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tasks'})
export class Task {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({nullable: false})
    title: string;

    @Column({nullable: false})
    description: string;

    @Column({nullable: false})
    status: number;
}

Arquivo de Testes REST

Um arquivo com requisições de teste para a API está localizado em:

/docs/rest-client.http

Este arquivo pode ser utilizado na extensão "Rest Client" do VSCode para testar os endpoints de forma rápida.