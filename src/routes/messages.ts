/** source/routes/posts.ts */
import express from 'express'
import controller from '../controllers/messages'
const MessagesRouter = express.Router()

MessagesRouter.get('/messages', controller.getMessages)
MessagesRouter.get('/messages/:id', controller.getMessage)
MessagesRouter.post('/messages', controller.addMessage)
MessagesRouter.put('/messages/:id', controller.updateMessage)
MessagesRouter.delete('/messages/:id', controller.deleteMessage)

export default MessagesRouter