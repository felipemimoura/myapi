import { createRolesController } from '@roles/useCases/createRole'
import { listRoleController } from '@roles/useCases/listRole'
import { Router } from 'express'

const rolesRoutes = Router()

rolesRoutes.post('/', (request, response) => {
  return createRolesController.handler(request, response)
})

rolesRoutes.get('/', (request, response) => {
  return listRoleController.handler(request, response)
})

export { rolesRoutes }
