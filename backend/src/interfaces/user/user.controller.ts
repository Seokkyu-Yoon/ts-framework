import { IRequest } from '../../interfaces/application/request'
import { IUser } from './user.model'
import { IUserService } from './user.service'

export interface IUserController {
  userService: IUserService

  all(): Promise<IUser[]>
  getById(req: IRequest): Promise<IUser>
  signup(req: IRequest): Promise<IUser>
  signout(req: IRequest): Promise<Boolean>
}
