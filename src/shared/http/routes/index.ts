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
  - [] Mover lógica para de criação do category
  - [] Utilizar classe de Error para quando a role já existir


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
