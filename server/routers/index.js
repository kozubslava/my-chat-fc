const userRouter = require('./userRouter');
const chatRouter = require('./chatRouter');
const authRouter = require('./authRouter');
const rootRouter = require('express').Router();

rootRouter.use('/users', userRouter);
rootRouter.use('/auth', authRouter);
rootRouter.use('/chats', chatRouter)

module.exports = rootRouter;