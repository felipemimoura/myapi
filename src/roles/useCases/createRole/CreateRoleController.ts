import { RoleRepository } from '@roles/repository/RoleRepository'
import { AppError } from '@shared/errors/AppError'
import { Request, Response } from 'express'

export class CreateRoleController {
  handler(request: Request, response: Response): Response {
    // Informação que vem pela requisão
    const { name } = request.body
    const roleRepository = new RoleRepository()

    // Verificando se existe um role com nome passado
    const roleAlreadyExist = roleRepository.findByName(name)

    if (roleAlreadyExist) {
      throw new AppError('Role already exists')
    }

    // Enviando dados para o repository salvar
    const role = roleRepository.create({ name })

    return response.status(201).json(role)
  }
}
