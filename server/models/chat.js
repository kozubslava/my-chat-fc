const { Schema, model } = require('mongoose');

const chatSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'title is required'],
    },
    imgSrc: { type: String },
    users:[{type: Schema.Types.ObjectId, ref: 'User'}],
    
  },
  { timestamps: true }
);

const Chat =model('Chat', chatSchema);

module.exports = Chat;
