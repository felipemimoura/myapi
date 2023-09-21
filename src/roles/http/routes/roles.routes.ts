import { RoleRepository } from '@roles/repository/RoleRepository'
import { Router } from 'express'

const rolesRoutes = Router()
const roleRepository = new RoleRepository()

rolesRoutes.post('/', (request, response) => {
  // Informação que vem pela requisão
  const { name } = request.body

  // Enviando dados para o repository salvar
  const role = roleRepository.create({ name })

  return response.status(201).json(role)
})

rolesRoutes.get('/', (request, response) => {
  // Utilizando reposity
  const roles = roleRepository.findAll()

  return response.json(roles)
})

export { rolesRoutes }
