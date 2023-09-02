import { Router } from 'express'

import { find } from './task.controller.js'

export const TaskRouter = Router()

// GET Routes
TaskRouter.get('/', find)