import { Router } from 'express'

import { find, create } from './task.controller.js'

export const TaskRouter = Router()

// GET Routes
TaskRouter.get('/', find)


// POST Routes
TaskRouter.post('/', create)