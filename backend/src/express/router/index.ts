import {
  Router as ExpressRouter,
  NextFunction,
  Request,
  Response,
} from 'express'

import { IModules } from '../../interfaces/application/modules'

import { HttpError } from '../../application/http-error'
import { Renderer } from './adapter'
import { ApiRouter } from './api'

export function Router(modules: IModules) {
  return ExpressRouter()
    .use('/api', ApiRouter(modules))
    .get('/*', Renderer('index.html'))
    .use((_req, _res, next) => {
      const httpError = new HttpError(404, 'Not found')
      next(httpError)
    })
    .use((err: any, _req: Request, res: Response, _next: NextFunction) => {
      const httpStatus: number = err instanceof HttpError ? err.httpStatus : 500
      const message: string = err instanceof Error ? err.message : String(err)
      res.status(httpStatus).send({ message })
    })
}
