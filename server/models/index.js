const mongoose = require("mongoose");
const dbConfig = require("../configs/mongo.json");
const User = require("./user");
const Chat = require("./chat");

async function connectToDb() {
  await mongoose.connect(dbConfig.CONNECTION_STRING);
}

connectToDb().catch((err) => {
  process.exit(1);
});

module.exports = { User };
module.exports = { Chat };
