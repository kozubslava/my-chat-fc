const chatRouter = require('express').Router();
const ChatController = require('../controllers/chat.controller');

chatRouter.route('/')
  .post(ChatController.createChat)
  .get(ChatController.getChats)

chatRouter.route('/:chatId')
  .get(ChatController.getChat)
  .put(ChatController.addMessageToChat)
  .delete(ChatController.deleteChat)
    

module.exports = chatRouter;