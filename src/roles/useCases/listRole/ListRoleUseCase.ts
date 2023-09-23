import { Role } from '@roles/entities/role'
import { RoleRepository } from '@roles/repository/RoleRepository'

export class ListRoleUseCase {
  constructor(private roleRepository: RoleRepository) {}

  execute(): Role[] {
    return this.roleRepository.findAll()
  }
}
