import { RoleRepository } from '@roles/repository/RoleRepository'
import { createRolesController } from '@roles/useCases/createRole'
import { Router } from 'express'

const rolesRoutes = Router()
const roleRepository = new RoleRepository()
// const createRoleController = new CreateRoleController()

rolesRoutes.post('/', (request, response) => {
  return createRolesController.handler(request, response)
})

rolesRoutes.get('/', (request, response) => {
  // Utilizando reposity
  const roles = roleRepository.findAll()

  return response.json(roles)
})

export { rolesRoutes }
