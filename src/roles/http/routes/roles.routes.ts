import { Router } from 'express'
import { Role } from './entities/role'

const rolesRoutes = Router()

const roles: Role[] = []

rolesRoutes.post('/', (request, response) => {
  // Informação que vem pela requisão
  const { name } = request.body

  //Utilizando a classe Role
  const role = new Role()

  // Juntando a classe Role junto com as informações fornecessidas pelo usuário
  Object.assign(role, {
    name,
    created_at: new Date(),
  })

  roles.push(role)

  return response.status(201).json(role)
})

export { rolesRoutes }
