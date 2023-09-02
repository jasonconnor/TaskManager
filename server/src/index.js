import { App } from './app/app.js'
import { connectToDatabase } from './app/app.service.js'

App.listen(4000, async () => {
  console.log('API is running on port 4000.')
  await connectToDatabase('mongodb://127.0.0.1:27017/todos')
})