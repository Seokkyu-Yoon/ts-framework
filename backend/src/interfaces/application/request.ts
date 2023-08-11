import { IncomingHttpHeaders } from 'http'

export interface IRequest {
  headers: IncomingHttpHeaders
  params: any
  body: any
  query: any
  url: string
}
