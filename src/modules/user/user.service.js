const pool = require("../../config/postgres");
const Log = require("../log/log.model.mongo");

const createUser = async (name, age) => {
  const result = await pool.query(
    "INSERT INTO users(name, age) VALUES($1, $2) RETURNING *",
    [name, age]
  );

  await Log.create({ action: "User created" });
  return result.rows[0];
};

const getUsers = async () => {
  const result = await pool.query("SELECT * FROM users");
  return result.rows;
};

module.exports = { createUser, getUsers };
