const _ = require('lodash');

module.exports.prepearUser = (user) => {
  const userWithoutPassword = _.omit(user, ['password', '__v']);

  return userWithoutPassword;
};