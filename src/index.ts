import express from 'express'
// import statusRoute from './routes/status.route'
// import dotenv from 'dotenv'
import { NextFunction, Request, Response } from 'express'

const app = express()
// dotenv.config()

// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

// app.use(statusRoute)


app.get('/', (req: Request, res: Response, next: NextFunction) => {
    return res.send('Express Typescript on Vercel')
})

const port = process.env.PORT || 3333

app.listen(port, () => console.log(`Server running on port ${port}`))