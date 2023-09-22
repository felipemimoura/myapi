import { RoleRepository } from '@roles/repository/RoleRepository'
import { Router } from 'express'

const rolesRoutes = Router()
const roleRepository = new RoleRepository()

rolesRoutes.post('/', (request, response) => {
  // Informação que vem pela requisão
  const { name } = request.body

  // Verificando se existe um role com nome passado
  const roleAlreadyExist = roleRepository.findByName(name)

  if (roleAlreadyExist) {
    return response.status(400).json({ error: 'Role alredy exist' })
  }

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
