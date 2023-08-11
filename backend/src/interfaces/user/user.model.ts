export interface IUserNoPassword {
  id: string
  name: string
  phone?: string
}
export interface IUser extends IUserNoPassword {
  password: string
  excludePassword(): IUserNoPassword
}
