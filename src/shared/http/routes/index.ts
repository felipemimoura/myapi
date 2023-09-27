/*
 * TODO
  - [x] Criar arquivo roles.routes.ts
  - [x] Criar rota para criação de uma roles
  - [x] Instalar UUID
  - [x] Criar uma nova role
  - [x] Retonar a rota criada
  - [x] Criar arquivo roles dentro da pasta entities
  - [x] Criar uma class Role
  - [x] Atribuir o id através do construtor
  - [x] utilizar  class Role para e juntar com as informações de nome e created_at
  - [x] Criar RoleRepository dentro da pasta repository
  - [x] Criar class RoleRepository
  - [x] Criar método create na class RoleRepository
  - [x] Criar DTO para método create
  - [x] Refatorar rota create roposito
  - [x] Criar método para buscar dados no banco de dados
  - [x] Criar rota para buscar todos
  - [x] Criar método findByName
  - [x] Não permitir cadastrar um role com o mesmo nome
  - [x] Criar Pastas useCases
  - [x] Criar pasta creteRole para a criação de rotas
  - [x] Criar arquivo Controller para criar a rota
  - [x] Mover lógica para de criação do category
  - [x] Utilizar classe de Error para quando a role já existir
  - [x] Criar a useCase para CreateRole
  - [x] Definir um DTO para a criação de uma role
  - [x] Install swagger
  - [x] Create file swagger.json on src
  - [x] Import swagger-ui-express on server file
  - [x] Import swagger file
  - [x] Add middleware to use swagger
  - [x]  Install typeOrm
  - [x]  Install reflect-metadata
  - [x]  Install sqlite3
  - [x]  Import reflect-metadata in server.ts
  - [x] Create file in shared/typeorm/index.ts
  - [x] Initialize new DataSource file
  - [x] add entities to dataSource
  - [x] add migrations to dataSource
  - [x] create a file app.ts and move all express configs

  */
import { Router } from 'express'
import { rolesRoutes } from '@roles/http/routes/roles.routes'

const routes = Router()

routes.get('/', (request, response) => {
  // throw new Error()
  return response.json({
    message: 'Olá devs',
  })
})

// utlizando rotas de um outro arquivo
routes.use('/roles', rolesRoutes)

export { routes }
