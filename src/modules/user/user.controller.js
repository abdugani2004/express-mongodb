const userService = require("./user.service");

const createUser = async (req, res) => {
  try {
    const { name, age } = req.body;
    
    if (!name || !age) {
      return res.status(400).json({ error: "Name and age are required" });
    }

    const user = await userService.createUser(name, age);
    res.status(201).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await userService.getUsers();
    res.json({ success: true, count: users.length, data: users });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { createUser, getUsers };