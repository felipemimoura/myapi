/*
 * TODO
  - [x] Criar arquivo roles.routes.ts
  - [x] Criar rota para criação de uma roles
  - [x] Instalar UUID
  - [x] Criar uma nova role
  - [x] Retonar a rota criada
  - [] Criar arquivo roles dentro da pasta entities
  - [] Criar uma class Role
  - [] Atribuir o id através do construtor
  - [] utilizar  class ROle para e juntar com as informações de nome e created_at
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
