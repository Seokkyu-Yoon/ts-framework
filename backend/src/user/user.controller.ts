import { IRequest } from '../interfaces/application/request'
import { IUserController } from '../interfaces/user/user.controller'
import { IUser } from '../interfaces/user/user.model'
import { IUserService } from '../interfaces/user/user.service'

import { User } from './user.model'

export class UserController implements IUserController {
  userService: IUserService

  constructor(userService: IUserService) {
    this.userService = userService
  }

  async all(): Promise<IUser[]> {
    return await this.userService.all()
  }

  async getById(req: IRequest): Promise<IUser> {
    const id = req.params.id || null
    if (id === null) throw new Error('id is not defined')
    return await this.userService.getById(id)
  }

  async signup(req: IRequest): Promise<IUser> {
    const user = new User(req.body)
    return await this.userService.signup(user)
  }

  async signout(req: IRequest): Promise<Boolean> {
    const id = req.params.id || null
    if (id === null) throw new Error('id is not defined')
    return await this.userService.signout(id)
  }
}
