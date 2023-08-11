import path from 'node:path'

import { IModules } from './interfaces/application/modules'

import { Express } from './express'
import UserModule from './user'

export async function App(port: number) {
  const rootPath = path.join(__dirname, '..')
  const viewPath = path.join(rootPath, 'public')
  const staticPath = path.join(rootPath, 'public')

  const userModule = new UserModule()

  const modules: IModules = {
    userModule,
  }

  return Express(port, viewPath, staticPath, modules)
}
