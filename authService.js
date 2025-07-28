const User = require('../models/User');
const { FACE_MATCH_THRESHOLD } = require('../config/constants');

const registerUser = async (name, role, username, password, descriptor) => {
  const userId = await User.create(name, role, username, password, descriptor);
  return { id: userId, name, role };
};

const loginUser = async (descriptor) => {
  const users = await User.findByDescriptor();
  for (const user of users) {
    const storedDescriptor = JSON.parse(user.descriptor);
    const distance = calculateDistance(descriptor, storedDescriptor);
    if (distance < FACE_MATCH_THRESHOLD) {
      return user;
    }
  }
  throw new Error('No matching user found');
};

const loginWithUsernamePassword = async (username, password) => {
  const user = await User.findByUsername(username);
  if (!user) {
    throw new Error('User not found');
  }
  if (user.password !== password) {
    throw new Error('Incorrect password');
  }
  return user;
};

module.exports = { registerUser, loginUser, loginWithUsernamePassword };