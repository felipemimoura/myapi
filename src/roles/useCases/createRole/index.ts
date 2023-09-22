import { RoleRepository } from '@roles/repository/RoleRepository'
import { CreateRoleUseCase } from './CreteRoleUseCase'
import { CreateRoleController } from './CreateRoleController'

const rolesRepository = new RoleRepository()
const createRoleUseCase = new CreateRoleUseCase(rolesRepository)
export const createRolesController = new CreateRoleController(createRoleUseCase)
