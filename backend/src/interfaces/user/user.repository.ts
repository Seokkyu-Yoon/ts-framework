import { IDataSourceMemory } from './data-source/memory'
import { IUser } from './user.model'

export interface IUserRepository {
  dataSourceMemory: IDataSourceMemory

  all(): Promise<IUser[]>
  getById(id: string): Promise<IUser>
  insert(user: IUser): Promise<IUser>
  deleteById(id: string): Promise<Boolean>
}
