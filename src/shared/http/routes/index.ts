/*
 * TODO
  - [x] Criar arquivo roles.routes.ts
  - [x] Criar rota para criação de uma roles
  - [x] Instalar UUID
  - [x] Criar uma nova role
  - [] Retonar a rota criada
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

routes.use('/roles', rolesRoutes)

export { routes }
