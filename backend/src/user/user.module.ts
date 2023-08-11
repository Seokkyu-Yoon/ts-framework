import { IUserModule } from '../interfaces/user/user.module'

import { UserController } from './user.controller'
import { UserRepository } from './user.repository'
import { UserService } from './user.service'

export class UserModule implements IUserModule {
  repository = new UserRepository()
  service = new UserService(this.repository)
  controller = new UserController(this.service)
}
