const bcrypt = require("bcrypt");
const { User } = require("../models");
const { prepearUser } = require("../utils/userUtils");

module.exports.registration = async (req, res, next) => {
  try {
    const { body } = req;
    const user = await User.create(body);
    

    const userWithoutPassword = prepearUser(user);
    res.status(201).send({ data: userWithoutPassword });
    
  } catch (error) {
    next(error);
  }
};

module.exports.login = async (req, res, next) => {
  try {
    const {
      body: { email, password },
    } = req;

    console.log(email, password);
    const user = await User.findOne({ email });
    
    if (!user) {
      throw new Error("Invalid login or password");
    }

    const isSamePassword = await bcrypt.compare(password, user.password);
    if (!isSamePassword) throw new Error("Invalid login or password");


    const userWithoutPassword = prepearUser(user);
    res.status(201).send({ data: userWithoutPassword });
    
  } catch (error) {
    next(error);
  }
};
