# todo-task-nestjj - NestJS & TypeORM By: [@dev-azevedo](https://linkedin.com/in/dev-azevedo)

## Descrição

Este projeto é uma API RESTful de gerenciamento de tarefas (CRUD) desenvolvida com NestJS e TypeORM. Ele permite criar, listar, atualizar e excluir tarefas em um banco de dados SQLite.

## Tecnologias Utilizadas

- [NestJS](https://nestjs.com/)
- [TypeORM](https://typeorm.io/)
- [SQLite](https://www.sqlite.org/)

## Instalação

1. Clone o repositório:

   ```sh
   git clone todo-task-nestjj
   cd todo-task-nestjj
   ```

2. Instale as dependências:

   ```sh
   npm install
   ```

3. Inicie a aplicação:

   ```sh
   npm run start:dev
   ```

## Endpoints

### *Obter todas as tarefas*

```http
GET http://localhost:3000/tasks?page=1&limit=10
```

**Resposta:**

```json
[
    {
        "id": 1,
        "title": "Task 1",
        "description": "Description of Task 1",
        "status": 1
    }
]
```

### *Obter uma tarefa por ID*

```http
GET http://localhost:3000/tasks/1
```

**Resposta:**

```json
{
    "id": 1,
    "title": "Task 1",
    "description": "Description of Task 1",
    "status": 1
}
```

### *Criar uma nova tarefa*

```http
POST http://localhost:3000/tasks
Content-Type: application/json
```

**Body:**

```json
{
    "title": "Task 21",
    "description": "Task 1 description"
}
```

**Resposta:**

```json
{
    "id": 21,
    "title": "Task 21",
    "description": "Task 1 description",
    "status": 0
}
```

### *Atualizar uma tarefa*

```http
PATCH http://localhost:3000/tasks/1
Content-Type: application/json
```

**Body:**

```json
{
    "status": 3
}
```

**Resposta:**

```json
{
    "id": 1,
    "title": "Task 1",
    "description": "Description of Task 1",
    "status": 3
}
```

### *Excluir uma tarefa*

```http
DELETE http://localhost:3000/tasks/3
```

**Resposta:**

```json
{
    "message": "Task deleted successfully"
}
```

## Estrutura do Banco de Dados

```typescript
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
```

## Arquivo de Testes REST

Um arquivo com requisições de teste para a API está localizado em:

```
/docs/rest-client.http
```

Este arquivo pode ser utilizado na extensão "Rest Client" do VSCode para testar os endpoints de forma rápida.

