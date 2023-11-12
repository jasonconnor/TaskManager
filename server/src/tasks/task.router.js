import { Router } from 'express'

import { 
  find,
  create,
  remove,
  findOne,
  complete
} from './task.controller.js'

export const TaskRouter = Router()

// GET Routes
TaskRouter.get('/', find)
TaskRouter.get('/:id', findOne)


// POST Routes
TaskRouter.post('/', create)


// PUT Routes
TaskRouter.put('/:id/complete', complete)

// DELETE Routes
TaskRouter.delete('/:id', remove)