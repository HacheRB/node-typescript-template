import { Request, Response, NextFunction } from 'express'

interface Message {
  userId: Number
  id: Number
  timestamp: Date
  body: String
}

const getMessages = async (req: Request, res: Response, next: NextFunction) => {
  // Here we would petition Mongoose
  const Messages: [Message] = [
    {
      userId: 1,
      id: 1,
      timestamp: new Date(),
      body: 'Test'
    }
  ]
  return res.status(200).json({
    message: Messages
  })
}

const getMessage = async (req: Request, res: Response, next: NextFunction) => {
  const id: string = req.params.id
  // Here we would petition Mongoose
  const Message: Message = { userId: 1,id: 1, timestamp: new Date(),    body: 'Test'
  }
  return res.status(200).json({
    message: { id, Message }
  })
}

const updateMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id: string = req.params.id
  const body: string = req.body.body ?? null
  // Here we would petition Mongoose

  return res.status(200).json({
    message: { id, body }
  })
}

const deleteMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id: string = req.params.id
  // Here we would petition Mongoose
  return res.status(200).json({
    message: { id, message: 'Message deleted successfully' }
  })
}

const addMessage = async (req: Request, res: Response, next: NextFunction) => {
  const title: string = req.body.title
  const body: string = req.body.body
  // Here we would petition Mongoose

  return res.status(200).json({
    message: { title, body }
  })
}

export default {
  getMessages,
  getMessage,
  updateMessage,
  deleteMessage,
  addMessage
}
