import { DataSource } from 'typeorm'
import { CreateRolesTable1696193056260 } from './migration/1696193056260-CreateRolesTable'

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  migrations: [CreateRolesTable1696193056260],
})
