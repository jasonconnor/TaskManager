import mongoose from 'mongoose'

export async function connectToDatabase(uri) {
  try {
    await mongoose.connect(uri)
    console.log('Connected to database.')
  }

  catch (error) {
    console.log('Could not connect to database.')
    process.exit(1)
  }
}