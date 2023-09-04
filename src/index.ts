import express from 'express'
import statusRoute from './routes/status.route'
import dotenv from 'dotenv'

const app = express()
dotenv.config()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(statusRoute)

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`))