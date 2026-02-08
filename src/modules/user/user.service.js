const pool = require("../../config/postgres");
const Log = require("../log/log.model.mongo");

const createUser = async (name, age) => {
  const client = await pool.connect();
  try {
    const result = await client.query(
      "INSERT INTO users(name, age) VALUES($1, $2) RETURNING *",
      [name, age]
    );

    
    await Log.create({ 
      action: "USER_CREATED", 
      details: { name, age, id: result.rows[0].id } 
    });

    return result.rows[0];
  } catch (error) {
    await Log.create({ 
      action: "USER_CREATION_FAILED", 
      details: { error: error.message },
      status: 'error'
    });
    throw error;
  } finally {
    client.release();
  }
};

const getUsers = async () => {
  const result = await pool.query("SELECT * FROM users ORDER BY id DESC");
  return result.rows;
};

module.exports = { createUser, getUsers };