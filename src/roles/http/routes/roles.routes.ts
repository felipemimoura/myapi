import { Router } from 'express'
import { v4 as uuidV4 } from 'uuid'

const rolesRoutes = Router()

const roles = []

rolesRoutes.post('/', (request, response) => {
  // Informação que vem pela requisão
  const { name } = request.body

  const role = {
    id: uuidV4(),
    name,
    created_at: new Date(),
  }

  roles.push(role)

  return response.status(201).json(role)
})

export { rolesRoutes }
