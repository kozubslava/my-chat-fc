const Chat  = require('../models/chat');

module.exports.createChat = async(req,res,next) => {
  try {
    const {body} = req;
console.log(body);

    const chat = await Chat.create(body);

    res.status(201).send({data:chat});
    
  } catch (error) {
    next(error);
  }
};

module.exports.getChat = async(req,res,next) => {
  try {
    
  } catch (error) {
    next(error);
  }
};

module.exports.getChats = async(req,res,next) => {
  try {
    
  } catch (error) {
    next(error);
  }
};

module.exports.updateChat = async(req,res,next) => {
  try {
    
  } catch (error) {
    next(error);
  }
};

module.exports.deleteChat = async(req,res,next) => {
  try {
    
  } catch (error) {
    next(error);
  }
};

module.exports.addUserToChat = async(req,res,next) => {
  try {
    
  } catch (error) {
    next(error);
  }
};

module.exports.addMessageToChat = async(req,res,next) => {
  try {
    
  } catch (error) {
    next(error);
  }
};