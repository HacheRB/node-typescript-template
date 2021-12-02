import express from 'express'

import MessagesRouter from './messages'
const router = express.Router()

router.use('/messages', MessagesRouter)


export default router