import { Response, Request } from 'express'
import { ListRoleUseCase } from './ListRoleUseCase'

export class ListRoleController {
  constructor(private listRoleUseCase: ListRoleUseCase) {}

  handler(request: Request, response: Response): Response {
    const roles = this.listRoleUseCase.execute()

    return response.status(200).json(roles)
  }
}
