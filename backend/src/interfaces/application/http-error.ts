export interface IHttpError extends Error {
  httpStatus: number

  status(httpStatus: number): IHttpError
}
