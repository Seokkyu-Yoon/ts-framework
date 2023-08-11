import { IMemoryDB } from '../../db/memory'
import { IUser } from '../user.model'

export interface IDataSourceMemory {
  memoryDB: IMemoryDB
  getUsers(): Promise<IUser[]>
  getUserById(id: string): Promise<IUser>
  insertUser(user: IUser): Promise<IUser>
  deleteUserById(id: string): Promise<Boolean>
}
