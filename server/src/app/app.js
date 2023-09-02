import express from 'express'

import { AppRouter } from './app.router.js'

export const App = express()

App.use(AppRouter)