import { RoleRepository } from '@roles/repository/RoleRepository'
import { ListRoleUseCase } from './ListRoleUseCase'
import { ListRoleController } from './ListRoleController'

const rolesRepository = new RoleRepository()
const listRoleUseCase = new ListRoleUseCase(rolesRepository)
export const listRoleController = new ListRoleController(listRoleUseCase)
