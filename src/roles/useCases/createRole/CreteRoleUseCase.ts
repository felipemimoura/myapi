import { Role } from '@roles/entities/role'
import { RoleRepository } from '@roles/repository/RoleRepository'
import { AppError } from '@shared/errors/AppError'

type CreateRoleDTO = {
  name: string
}

export class CreateRoleUseCase {
  constructor(private roleRepository: RoleRepository) {}
  execute({ name }: CreateRoleDTO): Role {
    // Verificando se existe um role com nome passado
    const roleAlreadyExist = this.roleRepository.findByName(name)

    if (roleAlreadyExist) {
      throw new AppError('Role already exists')
    }

    // Enviando dados para o repository salvar
    return this.roleRepository.create({ name })
  }
}
