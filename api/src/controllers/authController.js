const authService = require("../services/authService");

const register = async (req, res) => {
  const { email, password, name, role } = req.body;
  try {
    const result = await authService.register(
      email,
      password,
      name,
      role
    );
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await authService.login(email, password);
    res.json(result);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

const logout = async (req, res) => {
  try {
    const result = await authService.logout();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { register, login, logout };
