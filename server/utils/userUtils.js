const _ = require('lodash');

module.exports.prepearUser = (user) => {
  const userWithoutPassword = _.omit(user.toObject(), ['password', '__v']);

  return userWithoutPassword;
};