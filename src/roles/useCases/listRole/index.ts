import { RoleRepository } from '@roles/repository/RoleRepository'
import { ListRoleUseCase } from './ListRoleUseCase'
import { ListRoleController } from './ListRoleController'

const rolesRepository = RoleRepository.getInstance()
const listRoleUseCase = new ListRoleUseCase(rolesRepository)
export const listRoleController = new ListRoleController(listRoleUseCase)
