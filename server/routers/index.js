const userRouter = require('./userRouter');
const chatRouter = require('./chatRouter')
const rootRouter = require('express').Router();

rootRouter.use('/users', userRouter);
rootRouter.use('/chats', chatRouter)

module.exports = rootRouter;