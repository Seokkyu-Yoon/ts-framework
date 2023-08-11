import { IUserController } from './user.controller'
import { IUserRepository } from './user.repository'
import { IUserService } from './user.service'

export interface IUserModule {
  repository: IUserRepository
  service: IUserService
  controller: IUserController
}
