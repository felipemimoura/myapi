import { Request, Response } from 'express'
import { CreateRoleUseCase } from './CreteRoleUseCase'

export class CreateRoleController {
  constructor(private createRoleUseCase: CreateRoleUseCase) {}
  handler(request: Request, response: Response): Response {
    // Informação que vem pela requisão
    const { name } = request.body

    const role = this.createRoleUseCase.execute({ name })

    return response.status(201).json(role)
  }
}
