import { IUser } from './user.model'
import { IUserRepository } from './user.repository'

export interface IUserService {
  userRepository: IUserRepository

  all(): Promise<IUser[]>
  getById(id: string): Promise<IUser>
  signup(user: IUser): Promise<IUser>
  signout(id: string): Promise<Boolean>
}
