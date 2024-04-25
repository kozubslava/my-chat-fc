const { Schema, model } = require('mongoose');

const chatMassageSchema = new Schema(
  {
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    chat: { type: Schema.Types.ObjectId, ref: 'Chat', required: true },
    text: { type: String, required: true }
  },
  { timestamps: true }
);

const ChatMassage =model('Chat', chatMassageSchema);

module.exports = ChatMassage;
