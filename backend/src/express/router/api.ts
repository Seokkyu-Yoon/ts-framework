import { IModules } from '../../interfaces/application/modules'

import { Router as ExpressRouter } from 'express'
import { ControllerAdapter } from './adapter'
import { HttpError } from '../../application/http-error'

export function ApiRouter(modules: IModules) {
  const { userModule } = modules

  return ExpressRouter()
    .get(
      '/users',
      ControllerAdapter(() => userModule.controller.all()),
    )
    .get(
      '/users/:id',
      ControllerAdapter((req) => userModule.controller.getById(req)),
    )
    .post(
      '/users',
      ControllerAdapter((req) => userModule.controller.signup(req)),
    )
    .delete(
      '/users/:id',
      ControllerAdapter((req) => userModule.controller.signout(req)),
    )

    .use((req, res, next) => {
      const err = new HttpError(404, 'Not found')
      next(err)
    })
}
