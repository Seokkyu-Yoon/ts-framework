import { IDataSourceMemory } from '../../interfaces/user/data-source/memory'
import { IMemoryDB } from '../../interfaces/db/memory'
import { IUser } from '../../interfaces/user/user.model'

import { MemoryDB } from '../../db/memory'
import { User } from '../user.model'

export class DataSourceMemory implements IDataSourceMemory {
  memoryDB: IMemoryDB = new MemoryDB()

  async getUsers(): Promise<IUser[]> {
    return (
      this.memoryDB.schema.users.map((savedUser) => new User(savedUser)) || []
    )
  }

  async getUserById(id: string): Promise<IUser> {
    const savedUser =
      this.memoryDB.schema.users.find((u) => u.id === id) || null
    if (savedUser === null) throw new Error('cannot find user')
    return new User(savedUser)
  }

  async insertUser(user: IUser): Promise<IUser> {
    if (
      this.memoryDB.schema.users.some((savedUser) => savedUser.id === user.id)
    ) {
      throw new Error('id user is already exists')
    }
    this.memoryDB.schema.users.push(user)
    return user
  }

  async deleteUserById(id: string): Promise<Boolean> {
    for (let i = 0; i < this.memoryDB.schema.users.length; i += 1) {
      const savedUser = this.memoryDB.schema.users[i]
      if (savedUser.id === id) {
        this.memoryDB.schema.users.splice(i, 1)
        return true
      }
    }
    return false
  }
}
