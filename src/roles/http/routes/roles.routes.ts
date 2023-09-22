import { RoleRepository } from '@roles/repository/RoleRepository'
import { CreateRoleController } from '@roles/useCases/createRole/CreateRoleController'
import { Router } from 'express'

const rolesRoutes = Router()
const roleRepository = new RoleRepository()
const createRoleController = new CreateRoleController()

rolesRoutes.post('/', (request, response) => {
  return createRoleController.handler(request, response)
})

rolesRoutes.get('/', (request, response) => {
  // Utilizando reposity
  const roles = roleRepository.findAll()

  return response.json(roles)
})

export { rolesRoutes }
