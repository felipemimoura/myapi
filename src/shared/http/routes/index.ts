/*
 * TODO
  - [x] Criar script "typeorm" com as instruções "ts-node-dev -r tsconfig-paths/register ./node_modules/typeorm/cli.js"
  - [x] Rodar a migration:create com o path "src/shared/typeorm/migration/CrateRolesTable"
  - [x] Criar tabela com o nome: "Roles", columns: [{"id, uuid", "isPrimary: true"}, {"name", "string", "isUnique"}, {created_at, timestamp, default: CURRENT_TIMESTAMP}]
  - [x] Drop table "Roles",
  - [x] Adicionar classe a migration
  - [] Rodar o script "npm run typeorm -- -d ./src/shared/typeorm/index.ts migration:run"
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
