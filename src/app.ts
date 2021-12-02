import express, { Express, Request, Response, NextFunction } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import http from 'http'
import morgan from 'morgan'
import routes from './routes/messages'

const app: Express = express()

// Middlewares
app.use(helmet())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

// Routes
app.use('/api', routes)

// Error handling 
app.use((req: Request, res: Response, next: NextFunction) => {
    const error = new Error('not found')
    return res.status(404).json({
        message: error.message
    })
})

// Server
const httpServer = http.createServer(app)
const PORT: any = process.env.PORT ?? 3000
httpServer.listen(PORT, () => console.log(`Server is running on port ${PORT}`))