import { IUser, IUserNoPassword } from '../interfaces/user/user.model'

export class User implements IUser {
  id: string
  password: string
  name: string
  phone?: string

  constructor({ id, password, name, phone }: IUser) {
    this.id = id
    this.password = password
    this.name = name
    this.phone = phone
  }

  excludePassword(): IUserNoPassword {
    return {
      id: this.id,
      name: this.name,
      phone: this.phone,
    }
  }
}
