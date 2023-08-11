import { IUserService } from '../interfaces/user/user.service'
import { IUserRepository } from '../interfaces/user/user.repository'
import { IUser } from '../interfaces/user/user.model'

export class UserService implements IUserService {
  userRepository: IUserRepository

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository
  }

  async all(): Promise<IUser[]> {
    return await this.userRepository.all()
  }

  async getById(id: string): Promise<IUser> {
    return await this.userRepository.getById(id)
  }

  async signup(user: IUser): Promise<IUser> {
    return await this.userRepository.insert(user)
  }

  async signout(id: string): Promise<Boolean> {
    return await this.userRepository.deleteById(id)
  }
}
