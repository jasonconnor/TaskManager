import { Router } from 'express'

export const AppRouter = Router()

// Global Middleware
AppRouter.use(cors('http://localhost:3000'))

// Routers