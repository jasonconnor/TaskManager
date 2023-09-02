import cors from 'cors'
import { json, Router } from 'express'

import { TaskRouter } from '../tasks/task.router.js'

export const AppRouter = Router()

// Global Middleware
AppRouter.use(cors('http://localhost:3000'))
AppRouter.use(json())

// Routers
AppRouter.use('/tasks', TaskRouter)