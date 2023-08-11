import { IHttpError } from '../interfaces/application/http-error'

export class HttpError extends Error implements IHttpError {
  httpStatus: number

  constructor(message?: string)
  constructor(httpStatus: number, message?: string)
  constructor(arg1?: string | number, arg2?: string) {
    if (typeof arg1 === 'number') {
      super(arg2)
      this.httpStatus = arg1
    } else {
      super(arg1)
      this.httpStatus = 500
    }
  }

  status(httpStatus: number): IHttpError {
    this.httpStatus = httpStatus
    return this
  }
}
