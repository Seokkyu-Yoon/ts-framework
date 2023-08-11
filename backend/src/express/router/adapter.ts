import Express from 'express'

import { IRequest } from '../../interfaces/application/request'

export function ControllerAdapter(controller: (req: IRequest) => {}) {
  if (typeof controller !== 'function') {
    throw new Error('controller must be a function')
  }

  return function (
    req: Express.Request,
    res: Express.Response,
    next: Express.NextFunction,
  ) {
    try {
      const dataOrPromise = controller(req)
      if (dataOrPromise instanceof Promise) {
        return dataOrPromise
          .then((data) => res.send(data))
          .catch((err) => next(err))
      }
    } catch (err) {
      next(err)
    }
  }
}

export function MiddlewareAdapter(middleware: (req: IRequest) => {}) {
  if (typeof middleware !== 'function') {
    throw new Error('middleware must be a function')
  }

  return function (
    req: Express.Request,
    res: Express.Response,
    next: Express.NextFunction,
  ) {
    try {
      const dataOrPromise = middleware(req)
      if (dataOrPromise instanceof Promise) {
        return dataOrPromise
          .then((data) => {
            if (data) {
              req.body = req.body || {}
              req.body._injected = req.body._injected || {}
              Object.assign(req.body._injected, data)
            }
            next()
          })
          .catch((err) => next(err))
      }
      next()
    } catch (err) {
      next(err)
    }
  }
}

export function Renderer(viewfile: string) {
  return function (
    req: Express.Request,
    res: Express.Response,
    next: Express.NextFunction,
  ) {
    res.render(viewfile)
  }
}
