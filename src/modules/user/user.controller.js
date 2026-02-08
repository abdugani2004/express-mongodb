const userService = require("./user.service");

const createUser = async (req, res) => {
  const { name, age } = req.body;
  const user = await userService.createUser(name, age);
  res.status(201).json(user);
};

const getUsers = async (req, res) => {
  const users = await userService.getUsers();
  res.json(users);
};

module.exports = { createUser, getUsers };
