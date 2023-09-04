import { Router } from 'express'

import { find, findOne, create, remove } from './task.controller.js'

export const TaskRouter = Router()

// GET Routes
TaskRouter.get('/', find)
TaskRouter.get('/:id', findOne)


// POST Routes
TaskRouter.post('/', create)


// PUT Routes


// DELETE Routes
TaskRouter.delete('/:id', remove)