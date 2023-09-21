import { Router } from 'express'
import { Role } from '../../entities/role'
import { RoleRepository } from '@roles/repository/RoleRepository'

const rolesRoutes = Router()
const roleRepository = new RoleRepository()

const roles: Role[] = []

rolesRoutes.post('/', (request, response) => {
  // Informação que vem pela requisão
  const { name } = request.body

  // Utilizando reposity
  const role = roleRepository.create({ name })

  return response.status(201).json(role)
})

export { rolesRoutes }
