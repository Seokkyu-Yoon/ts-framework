import { IModules } from '../interfaces/application/modules'

import express from 'express'
import cors from 'cors'
import ejs from 'ejs'
import { Router } from './router'

export function Express(
  port: number,
  viewPath: string,
  staticPath: string,
  modules: IModules,
) {
  const router = Router(modules)
  return express()
    .set('port', port)
    .set('views', viewPath)
    .set('view engine', 'ejs')
    .engine('html', ejs.renderFile)

    .use(cors())
    .use(express.json())
    .use(express.static(staticPath))

    .use(router)
}
