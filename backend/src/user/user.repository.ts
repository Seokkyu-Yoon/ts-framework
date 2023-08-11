import { IUserRepository } from '../interfaces/user/user.repository'
import { IDataSourceMemory } from '../interfaces/user/data-source/memory'
import { IUser } from '../interfaces/user/user.model'

import { DataSourceMemory } from './data-source/memory'

export class UserRepository implements IUserRepository {
  dataSourceMemory: IDataSourceMemory

  constructor() {
    this.dataSourceMemory = new DataSourceMemory()
  }

  async all(): Promise<IUser[]> {
    return await this.dataSourceMemory.getUsers()
  }

  async getById(id: string): Promise<IUser> {
    return await this.dataSourceMemory.getUserById(id)
  }

  async insert(user: IUser): Promise<IUser> {
    return await this.dataSourceMemory.insertUser(user)
  }

  async deleteById(id: string): Promise<Boolean> {
    return await this.dataSourceMemory.deleteUserById(id)
  }
}
