const authService = require('../services/authService');

const register = async (req, res) => {
  const { name, role, username, password, descriptor } = req.body;
  try {
    const user = await authService.registerUser(name, role, username, password, descriptor);
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const login = async (req, res) => {
  const { descriptor } = req.body;
  try {
    const user = await authService.loginUser(descriptor);
    res.status(200).json({ message: 'Login successful', user });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

const loginWithUsernamePassword = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await authService.loginWithUsernamePassword(username, password);
    res.status(200).json({ message: 'Login successful', user });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

module.exports = { register, login, loginWithUsernamePassword };